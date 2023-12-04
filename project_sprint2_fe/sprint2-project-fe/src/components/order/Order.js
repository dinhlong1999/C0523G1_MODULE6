import {Header} from "../homepages/Header";
import {Footer} from "../homepages/Footer";

export function Order() {

    return(
        <div>
            <Header/>
            <div className="container-fluid big-padding about-cover">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <table className="table bg-white shadow-md">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                               <tbody>
                               <tr className="align-middle">
                                   <td>1</td>
                                   <td>
                                       <img className="max-100" src="../../../product/img.png" alt=""/>
                                   </td>
                                   <td>Personalised Birthday Easel</td>
                                   <td>2</td>
                                   <td>44</td>
                                   <td>88</td>
                                   <td>
                                       <button className="btn btn-xs pt-2 btn-danger"><i className="bi bi-trash"></i>
                                       </button>
                                   </td>
                               </tr>
                               <tr className="align-middle">
                                   <td>2</td>
                                   <td>
                                       <img className="max-100" src="../../../product/img_1.png" alt=""/>
                                   </td>
                                   <td>Personalised Wedding Easel</td>
                                   <td>1</td>
                                   <td>64</td>
                                   <td>64</td>
                                   <td>
                                       <button className="btn btn-xs pt-2 btn-danger"><i className="bi bi-trash"></i>
                                       </button>
                                   </td>
                               </tr>
                               </tbody>


                            </table>

                            <button className="btn btn-danger float-end fw-bolder px-4">Make Rent</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popular-brands big-padding bg-white container-fluid">
                <div className="container">
                    <div className="section-tile row">
                        <div className="col-md-10 text-center mx-auto">
                            <h2>Popular Brands</h2>
                        </div>
                    </div>
                    <div className="row pt-5" style={{alignItems:"center"}}>
                        <div className="col-lg-3 col-md-4 col-6 mb-4">
                            <div className="brand-cover">
                                <img src="../../../../brand/img.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4">
                            <div className="brand-cover">
                                <img src="../../../../brand/img_1.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4">
                            <div className="brand-cover">
                                <img src="../../../../brand/img_4.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4">
                            <div className="brand-cover">
                                <img src="../../../../brand/img_6.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}