import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Footer.module.css';
import twitter from '../../img/twitter.png';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import youtube from '../../img/youtube.png';
import github from '../../img/github.png'


const Footer = () => (
  <div className={styles.Footer}>
    <footer  className={styles.footer}>
    <div class="text-center text-md-left">
    <div class="row">
      <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
      <h5 class="font-weight-bold text-uppercase mb-4">App Kwik-E-Mart</h5>
      <p>Esta es una aplicativo web desarrollada para la cadena de minisuper Kwik-E-Mart.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
          esse
          quasi, veritatis totam voluptas nostrum.</p>
      </div>
      <hr class="clearfix w-100 d-md-none"/>
      <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
      <h5 class="font-weight-bold text-uppercase mb-4">About</h5>

<ul class="list-unstyled">
  <li>
    <p>
      <a href="https://github.com/DummiesWeb">PROJECTS</a>
    </p>
  </li>
  <li>
    <p>
      <a href="#!">ABOUT US</a>
    </p>
  </li>
  <li>
    <p>
      <a href="#!">BLOG</a>
    </p>
  </li>
  <li>
    <p>
      <a href="#!">AWARDS</a>
    </p>
  </li>
</ul>
      </div>
      <hr class="clearfix w-100 d-md-none"/>
      <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

        <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>

        <ul class="list-unstyled">
          <li>
            <p>
              <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
          </li>
          <li>
            <p>
              <i class="fas fa-envelope mr-3"></i> info@DummiesWeb.com</p>
          </li>
          <li>
            <p>
              <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          </li>
          <li>
            <p>
              <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </li>
        </ul>
      </div>
      <hr class="clearfix w-100 d-md-none"></hr>
      <div class="col-md-2 col-lg-2 text-center mx-auto my-4">


<h5 class="font-weight-bold text-uppercase mb-4">Follow Us</h5>


<a type="button" class="btn-floating btn-fb" href='https://web.facebook.com/' target="_blank">
<img src={facebook} class="d-block mx-auto mb-4" alt="logo de facebook" height="30"/>
</a>
<br></br>
<a type="button" class="btn-floating btn-tw" href="https://twitter.com/macondo011" target="_blank">
<img src={twitter} class="d-block mx-auto mb-4" alt="logo de twitter" height="30"/>
</a>
<br></br>
<a type="button" class="btn-floating btn-gplus" href='https://www.instagram.com/' target="_blank">
<img src={instagram} class="d-block mx-auto mb-4" alt="logo de instagram" height="30"/>
</a>
<br></br>
<a type="button" class="btn-floating btn-dribbble" href='https://www.youtube.com/' target="_blank">
<img src={youtube} class="d-block mx-auto mb-4" alt="logo de youtobe" height="30"/>
</a>

</div>
    </div>
    <a type="button" class="btn-floating btn-dribbble" href='https://github.com/DummiesWeb/VirtualStore' target="_blank">
    <img src={github} class="d-block mx-auto mb-4" alt="logo de github" height="40"/>
    </a>
    </div>
    <div className={styles.footerdiv}>© 2022 Creative Commons:
    <a href="#"> DummiesWeb.com</a>
  </div>
    </footer>


    
  </div>
);


export default Footer;
