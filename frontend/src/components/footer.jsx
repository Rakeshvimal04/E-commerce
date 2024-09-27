import logo from '../assets/logo.png'
function Footer(){
return(
    <>
 <div class="footer">
    <div class="container clearfix">
        <ul class="foosite clearfix">
            <li class="sitemap">
                <a href="">
                    <img class="responsive" src={logo} alt=""/>
                </a>
                <h5>follow us</h5>
                {/* <ul class="sociallink">
                    <li>
                        <a rel="nofollow" target="_blank" href="https://www.facebook.com/MRFCorplimited/" class="buttonBlue animatedButton"><span><i class="fa fa-facebook" aria-hidden="true"></i></span></a>
                    </li>
                    <li>
                        <a rel="nofollow" target="_blank" href="https://www.instagram.com/mrfvapocurepaints/" class="buttonBlue animatedButton" ><span><i class="fa fa-instagram" aria-hidden="true"></i></span></a>
                    </li>
                    <li>
                        <a rel="nofollow" target="_blank" href="https://www.youtube.com/channel/UCl03ta1SNWOrT-WvO9NNICw" class="buttonBlue animatedButton"><span><i class="fa fa-youtube-play" aria-hidden="true"></i></span></a>
                    </li>
                </ul> */}
            </li>
            <li class="sitemap">
                <h4>Quick Links</h4>
                <ul class="Aboutcom">
                    <li> <a href="">Company Profile</a></li>
                    <li> <a href="">Find a Dealer</a></li>
                    <li> <a href="">Request for Free Sampling</a> </li>
                    <li> <a href="">Request for Paint Preview</a></li>
                    <li> <a href="">Product Performance Warranty</a></li>
                    <li> <a href="">Careers</a></li>
                </ul>
            </li>
             <li class="sitemap">
                <h4>Downloads</h4>
                <ul class="Aboutcom">
                    <li><a href="about-us">Product Data Sheet</a></li>
                    <li><a href="javascript:void(0);">Warranty Details</a></li>
                    <li> <a href="javascript:void(0);">GST Certificate</a></li>
                    <li> <a href="javascript:void(0);">ISO Certificate</a></li>
                </ul>
            </li>
            <li class="sitemap">
                <h4 class="fomrfc">MRF Corp Limited</h4>
                <p>Tarapore Towers, V Floor, 826, Anna Salai, Chennai 600 002. INDIA</p>
                <a class="call-foo" href="tel:914428521033"> <span>Phone:</span> +91 44 - 2852 1033</a>
                <a class="call-foo" href="mailto:contact@mrfpaint.com"> <span>E-Mail:</span>  contact@mrfpaint.com</a>
                <a class="call-foo" href="javascript:void(0);"> <span>CIN:</span> U65929TN1985PLC012156</a>
                <a class="call-foo" href="javascript:void(0);"> <span>GST:</span> 33AAACM2185R1Z4</a>
            </li>
        </ul>
        <div class="copyrights clearfix">
            <p>©2024 MRF Vapocure Paints - All rights reserved</p>
        </div>
    </div>
</div>
    </>
)
}
export default Footer;
