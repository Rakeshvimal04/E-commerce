import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { faFacebookF ,faInstagram ,faTwitter} from '@fortawesome/free-brands-svg-icons';
import './style.css'


function Footer(){
return(
    <>
 <div class="footer mt-5">
    <div class="container clearfix">
        <ul class="foosite clearfix">
            <li class="sitemap">
                <a href="">
                    <img class="responsive" src={logo} alt=""/>
                </a>
                <h5>follow us</h5>
                <ul className="sociallink d-flex">
                    <li className='socialicons'> 
                    <FontAwesomeIcon icon={faFacebookF}/>
                    </li >
                    <li className='socialicons'>
                    <FontAwesomeIcon icon={faInstagram}/>
                    </li>
                    <li className='socialicons'>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </li>
                </ul>
            </li>
            <li className="sitemap">
                <h4 className=''>Quick Links</h4>
                <ul className="Aboutcom">
                    {/* <li> <a href="">Company Profile</a></li> */}
                    <li> <a href="">Find a Dealer</a></li>
                    <li> <a href="">Request for Free Sampling</a> </li>
                    <li> <a href="">Request for Paint Preview</a></li>
                    <li> <a href="">Product Performance Warranty</a></li>
                    {/* <li> <a href="">Careers</a></li> */}
                </ul>
            </li>
            <li className="sitemap">
                <h4 className="fomrfc ">MRF Corp Limited</h4>
                <p>LIG-523, New, Rayakottah Housing Board, Hosur, Tamil Nadu 635109</p>
                <a className="call-foo" href="tel:9597417885"> <span>Phone:</span> +91 9597417885</a><br/>
                <a className="call-foo" href="mailto:kgkpaints@gmail.com"> <span>E-Mail:</span> Kgkpaints@gmail.com</a><br/>
                <a className="call-foo" href="javascript:void(0);"> <span>CIN:</span> U65929TN1985PLC012156</a>
                <a className="call-foo" href="javascript:void(0);"> <span>GST:</span> 33AAACM2185R1Z4</a>
            </li>

            <li className="sitemap">
                <h4 className='text-center'>Location</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.861253087499!2d77.82670577575311!3d12.722473120289848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae71011ad56fcd%3A0x52a9bb3a83bb495d!2sKGK%20Paints%20%26%20Hardwares%20(MRF%20Vapocure%20Paints)!5e0!3m2!1sen!2sin!4v1727505953531!5m2!1sen!2sin" width="450" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </li>
        </ul>
        <div className="copyrights clearfix">
            <p className='text-center mt-5'>©2024 MRF Vapocure Paints - All rights reserved</p>
        </div>
    </div>
</div>
    </>
)
}
export default Footer;
