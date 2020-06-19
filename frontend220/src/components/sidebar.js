import React from "react";
//import ListMahasiswa from "../components/content/mahasiswa/page"
import Listmuser from "../components/content/m_user/list_m_user"
//import Datatablesertifikasi from "../components/content/m_sertifikasi/list_sertifikasi";
// //import user from "./user";
 import Page from "../components/content/mahasiswa/page"

// import ddd from "../components/content/controlbox/dependentdropdown"

class sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listMahasiswa: false,
      listmuser: false,
     // listsertifikasi: false
    };

    this.listModalHandler = this.listModalHandler.bind(this);
    this.listModal = this.listModal.bind(this);
    //this.listModalsertifikasi = this.listModalHandler.bind(this);
    this.mStatus = this.mStatus.bind(this);
  }

  listModalHandler() {
    this.setState({
      listMahasiswa: true
    });
  }

  // mStatus() {
  //   this.setState({
  //     listMahasiswa: false
  //   });
  //   console.log(this.state.listMahasiswa);
  //   alert(this.state.listMahasiswa);
  // }
  listModal() {
    this.setState({
      listmuser: true
    });
  }
  // listModalsertifikasi() {
  //   this.setState({
  //     listsertifikasi: true
  //   });
  // }

  mStatus() {
    this.setState({
      listMahasiswa: false,
      listmuser: false
     // listsertifikasi: false
    });
    console.log(this.state.listmuser);
  }

  componentDidMount() {
    this.mStatus();
  }
  render() {
    return (
//       <aside className="main-sidebar elevation-4 sidebar-dark-primary">
//         <a href="#" className="brand-link">
//           <img
//             src="dist/img/AdminLTELogo.png"
//             alt="AdminLTE Logo"
//             className="brand-image img-circle elevation-3"
//             style={{ opacity: 0.8 }}
//           />
//           <span className="brand-text font-weight-light">220 JS</span>
//         </a>
//         <div className="sidebar">
//           <div className="user-panel mt-3 pb-3 mb-3 d-flex">
//             <div className="image">
//               <img
//                 src="./dist/img/user2-160x160.jpg"
//                 className="img-circle elevation-2"
//                 alt="User Image"
//               ></img>
//             </div>
//             <div className="info">
//               <a href="#" className="d-block">
                
//               </a>
//             </div>
//           </div>
//           <nav className="mt-2">
//             <ul
//               className="nav nav-pills nav-sidebar flex-column nav-flat"
//               data-widget="treeview"
//               role="menu"
//               data-accordion="false"
//             >
//               <li className="nav-item">
//                 <a href="#" className="nav-link">
//                   <i className="nav-icon fas fa-tachometer-alt"></i>
//                   <p>Dashboard</p>
//                 </a>
//               </li>
//               {/* <li className="nav-item">
//                 <a href="pages/widgets.html" className="nav-link">
//                   <i className="nav-icon fas fa-th"></i>
//                   <p>
//                     Widgets
//                     <span className="right badge badge-danger">New</span>
//                   </p>
//                 </a>
//               </li> */}
//             <li class="nav-item has-treeview">
//             <a href="#" class="nav-link">
//               <i class="nav-icon fas fa-circle"></i>
//               <p>
//                 Master
//                 <i class="right fas fa-angle-left"></i>
//               </p>
//             </a>
//             <ul class="nav nav-treeview">
              
//               <li class="nav-item has-treeview">
//                 <a href="#" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>
//                     Mahasiswa
//                     <i class="right fas fa-angle-left"></i>
//                   </p>
//                 </a>
//                 <ul class="nav nav-treeview">
//                   <li class="nav-item">
//                     <a href="#" class="nav-link">
//                       <i class="far fa-dot-circle nav-icon"></i>
//                       <a class = 'nav-link' href="/listmahasiswa" component={listmahasiswa} >list Mahasiswa</a>
//                     </a>
//                   </li>
//                 </ul>
//                 <ul class="nav nav-treeview">
//                   <li class="nav-item">
//                     <a href="#" class="nav-link">
//                       <i class="far fa-dot-circle nav-icon"></i>
//                       <a class = 'nav-link' href="/page" component={page} >list page</a>
//                     </a>
//                   </li>
//                 </ul>

//               </li>
//               <li class="nav-item has-treeview">
//                 <a href="#" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>
//                     m_User
//                     <i class="right fas fa-angle-left"></i>
//                   </p>
//                 </a>
//                 <ul class="nav nav-treeview">
//                   <li class="nav-item">
//                     <a href="#" class="nav-link">
//                       <i class="far fa-dot-circle nav-icon"></i>
//                     <a class = 'nav-link' href="/listm_user" component={listmuser} >list M_User</a>
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav-item has-treeview">
//                 <a href="#" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>
//                     control box
//                     <i class="right fas fa-angle-left"></i>
//                   </p>
//                 </a>
//                 <ul class="nav nav-treeview">
//                   <li class="nav-item">
//                     <a href="#" class="nav-link">
//                       <i class="far fa-dot-circle nav-icon"></i>
//                     <a class = 'nav-link' href="/dependentdropdown" component={ddd} >dependent dropdown</a>
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>
//     );
//   }
// }
<aside className="main-sidebar elevation-4 sidebar-dark-primary">
<a href="#" className="brand-link">
  <img
    src="dist/img/index.jpg"
    alt="AdminLTE Logo"
    className="brand-image img-circle elevation-3"
    style={{ opacity: 0.8 }}
  />
  <span className="brand-text font-weight-light">220 JS</span>
</a>
<div className="sidebar">
  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
    <div className="image">
      <img
        src="./dist/img/user1-128x128.jpg"
        className="img-circle elevation-2"
        alt="User Image"  
      ></img>
    </div>
    <div className="info">
      <a href="#" className="d-block">
        Ilham Pandu Putra
      </a>
    </div>
  </div>
  <nav className="mt-2">
    <ul
      className="nav nav-pills nav-sidebar flex-column nav-flat"
      data-widget="treeview"
      role="menu"
      data-accordion="false"
    >
      <li className="nav-item">
        <a href="/home" className="nav-link">
          <i className="nav-icon fas fa-home"></i>
          <p>Home</p>
        </a>
      </li>
      {/* <li className="nav-item">
        <a href="pages/widgets.html" className="nav-link">
          <i className="nav-icon fas fa-th"></i>
          <p>
            Widgets
            <span className="right badge badge-danger">New</span>
          </p>
        </a>
      </li> */}
      <li className="nav-item has-treeview">
        <a href="#" className="nav-link">
          <i className="nav-icon fas fa-copy"></i>
          <p>
            Master
            <i className="fas fa-angle-left right"></i>
          </p>
        </a>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <a className="nav-link"
             onClick={this.listModal}
             >
              <i className="fas fa-user nav-icon"></i>
              
              <p>User</p>
              
            </a>
          </li>
          <li className="nav-item">
            <a
              // href="/mahasiswa"
              className="nav-link"
              onClick={this.listModalHandler}
            >
              <i className="fas fa-user-graduate nav-icon"></i>
              <p>Mahasiswa</p>
            </a>
          </li>
          {/* <li className="nav-item">
            <a
              // href="/mahasiswa"
              className="nav-link"
              onClick={this.listModalsertifikasi}
            >
              <i className="fas fa-user-graduate nav-icon"></i>
              <p>sertifikasi</p>
            </a>
          </li> */}
        </ul>
      </li>
    </ul>
  </nav>
</div>
<Listmuser list={this.state.listmuser} mStatus={this.mStatus} />
<Page list={this.state.listMahasiswa} mStatus={this.mStatus} />
{/* <Datatablesertifikasi list={this.state.listsertifikasi} mStatus={this.mStatus} /> */}
</aside>
);
}
}

export default sidebar;
