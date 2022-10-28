import React, { useRef, useState } from 'react';
import './Postform.css';
const Postform = (props) => {

    const pnam = useRef()
    const pdes = useRef()
    const pc = useRef()
    const bp = useRef()
    const bd = useRef()
    const sp = useRef()
    const sd = useRef()
    const pp = useRef()
    const pd = useRef()
    const [err, seterr] = useState({
        name : null,
        desc : null,
        bprice : null,
        bdesc : null,
        sprice : null,
        sdesc : null,
        pprice : null,
        prdesc : null
    })
    

    const addposthandler = (event) => {
        event.preventDefault()
        const namp = pnam.current.value;
        const desp = pdes.current.value;
        const cp = pc.current.value;
        const pb = bp.current.value;
        const db = bd.current.value;
        const ps = sp.current.value;
        const ds = sd.current.value;
        const prp = pp.current.value;
        const dp = pd.current.value;

        if(namp.length ===0)
        {
            seterr({
                ...err,
                name : 'Enter a valid product name',
                
        })
        }
        
        if(desp.length ===0)
        {
            seterr({
                ...err,
                desc : 'Enter a valid product description'
        })
        }

        if(pb.length ===0 || pb <0)
        {
            seterr({
                ...err,
                bprice : 'Enter a valid basic price'
        })
        }

        if(ps.length ===0 || ps <0)
        {
            seterr({
                ...err,
                sprice : 'Enter a valid standard price'
        })
        }

        if(prp.length ===0 || prp <0)
        {
            seterr({
                ...err,
                pprice : 'Enter a valid premium price'
        })
        }

        if(db.length ===0)
        {
            seterr({
                ...err,
                bdesc : 'Enter a valid basic description'
        })
        }

        if(ds.length ===0)
        {
            seterr({
                ...err,
                sdesc : 'Enter a valid standard description'
        })
        }

        if(dp.length ===0)
        {
            seterr({
                ...err,
                prdesc : 'Enter a valid premium description'
        })
        }
        props.Addpost(namp,desp,cp,pb,db,ps,ds,prp,dp)
        }
    console.log("hello")
  return (
    
<>
    <div className="container">
        <form onSubmit={addposthandler} >
            <div className="row">
                <div className="col-25">
                    <label htmlFor="pname">Product Name</label>
                </div>
                <div className="col-45">
                    <input type="text" ref={pnam} id="pname" name="pname" />
                </div>
                <div className="col-30"></div>
                { err.name && <h5 className='err'>Please Enter some product name</h5>}
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="pdesc">Product Description</label>
                </div>
                <div className="col-45">
                    <textarea id="pdesc" ref={pdes} name="pdesc" placeholder="Describe your product..." style={{height:200}}></textarea>
                </div>
                <div className="col-30"></div>
                { err.desc && <h5 className='err'>Please Enter something describing your product</h5>}
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="pcat">Product Category</label>
                </div>
                <div className="col-45">
                    <select ref={pc} id="pcat" name="pcat">
                        <option value="programming">Programming</option>
                        <option value="web development">Web Development</option>
                        <option value="cloud computing">Cloud Computing</option>
                        <option value="communication networks">Communication Networks</option>
                        <option value="machine learning">Machine Learning</option>
                        <option value="game development">Game Development</option>
                    </select>
                </div>
                <div className="col-30"></div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="bprice">Basic Price</label>
                </div>
                <div className="col-45">
                    <input type="text" ref={bp} id="bprice" name="bprice" />
                </div>
                <div className="col-30"></div>
                { err.bprice && <h5 className='err'>Please Enter a valid price</h5>}
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="pdescb">Description</label>
                </div>
                <div className="col-45">
                    <textarea id="pdescb" ref={bd} name="pdescb" placeholder="Describe your product..." style={{height:200}}></textarea>
                </div>
                <div className="col-30"></div>
                { err.bdesc && <h5 className='err'>Please Enter something describing your product</h5>}
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="sprice">Standard Price</label>
                </div>
                <div className="col-45">
                    <input type="text" ref={sp} id="sprice" name="sprice" />
                </div>
                <div className="col-30"></div>
                { err.sprice && <h5 className='err'>Please Enter a valid price</h5>}
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="pdescs">Description</label>
                </div>
                <div className="col-45">
                    <textarea id="pdescs" ref={sd} name="pdescs" placeholder="Describe your product..." style={{height:200}}></textarea>
                </div>
                <div className="col-30"></div>
                { err.sdesc && <h5 className='err'>Please Enter something describing your product</h5>}
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="pprice">Premium Price</label>
                </div>
                <div className="col-45">
                    <input type="text" ref={pp} id="pprice" name="pprice" />
                </div>
                <div className="col-30"></div>
                { err.pprice && <h5 className='err'>Please Enter a valid price</h5>}
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="pdescp">Description</label>
                </div>
                <div className="col-45">
                    <textarea id="pdescp" ref={pd} name="pdescp" placeholder="Describe your product..." style={{height:200}}></textarea>
                </div>
                <div className="col-30"></div>
                { err.prdesc && <h5 className='err'>Please Enter something describing your product</h5>}
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-3" id="sub">
                    <input type="submit" value="Submit" />
                </div>
                <div className="col-3"></div>
                <div className="col-3"></div>
            </div>
            <pre>



            </pre>
        </form>

    </div>
</>
  )
}

export default Postform;