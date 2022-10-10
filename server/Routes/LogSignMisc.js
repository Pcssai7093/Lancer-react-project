const router = require("express").Router();
const UDM = module.require("../Userdata/userdatamodel");
const GDM = module.require("../Gigdata/Gigdatamodel");
const TDM = module.require("../transactions/transactionmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");

const maxAge = 1 * 24 * 60 * 60;
function createToken(id) {
  return jwt.sign({ id }, process.env.jwt_code, {
    expiresIn: maxAge,
  });
}

router
  .route("/")
  .get((req, res) => {
    // res.send("hiii")
    res.render("signin", { er: "" });
  })
  .post((req, res) => {
    UDM.find({
      $and: [{ Email: req.body.Email }, { User_Block: { $ne: "true" } }],
    })
      .then(async (result) => {
        if (result.length != 1) {
          res.render("signin", { er: "user data inavalid" });
        } else {
          const b = await bcrypt.compare(req.body.Password, result[0].password);
          console.log(b);
          if (b) {
            console.log("id for token is" + result[0]._id);
            const token = createToken(result[0]._id);
            res.cookie("jwt", token, { maxAge: maxAge * 2000 });
            res.redirect("/home/" + result[0]._id.toString());
          } else {
            res.send("login failed");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

router
  .route("/signup")
  .get((req, res) => {
    res.render("signup", { er: "" });
  })
  .post(async (req, res) => {
    await UDM.find({
      $or: [
        { User_name: req.body.User_name },
        { Email: req.body.Email },
        { Mob_number: req.body.Mob_number },
      ],
    })
      .then((data) => {
        if (data.length > 0) {
          res.render("signup", {
            er: "Error:username/mobile/email not unqiue",
          });
        } else {
          const udm = new UDM({
            First_name: req.body.First_name,
            Last_name: req.body.Last_name,
            Age: req.body.Age,
            User_name: req.body.User_name,
            Email: req.body.Email,
            Mob_number: req.body.Mob_number,
            password: req.body.User_password,
          });

          udm
            .save()
            .then((result) => {
              const token = createToken(result._id);
              res.cookie("jwt", token, { maxAge: maxAge * 1000 });
              // res.send("signup succuss check token")
              res.redirect("/home/" + result._id.toString());
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

router.get("/aboutus", (req, res) => {
  res.render("aboutus");
});

router.get("/contactus", (req, res) => {
  res.render("contactus");
});

router.get("/contactusd", (req, res) => {
  res.send("<h1>Thanks for contacting us!<h1>");
});

module.exports = router;
