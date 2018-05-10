import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('Homepage', ({ page }) =>
        <div>
          <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
          <body>
            <div data-collapse="medium" data-animation="default" data-duration={400} className="navbar w-nav">
              <div className="main-menu w-container">
                <div className="mobile-logo-name-div w-hidden-main w-hidden-medium"><a href="#home" className="w-inline-block"><img src="images/abstrakt-concrete-mobile-logo-name.jpg" width={193} alt="Abstrakt Concrete - nav logo - phone" itemprop="logo" className="mobile-image-name" /></a></div><a href="#home" className="mobile-logo-icon w-hidden-main w-hidden-medium w-nav-brand"><img src="images/abstrakt-concrete-mobile-logo-icon.jpg" width={58} alt="Abstrakt Concrete - nav symbol - desktop" itemprop="logo" className="mobile-logo-image-icon" /></a><a href="#home" className="logo-nav w-hidden-small w-hidden-tiny w-nav-brand"><img src="images/abstrakt-concrete-logo-gold.jpg" width={125} alt="Abstrakt Concrete - nav logo - desktop and ipad" id="home-logo" itemprop="logo" className="home-logo" /></a>
                <nav role="navigation" className="nav-menu w-nav-menu"><a href="#about" className="main-nav-link w-nav-link">About</a><a href="#custom-kitchen-and-bathroom-countertops" className="main-nav-link w-nav-link">Work</a><a href="#handcrafted-functional-concrete-kitchen-countertops" className="main-nav-link w-nav-link">Services</a><a href="#Santana-Matlock-in-the-news" className="main-nav-link w-nav-link">NEWS</a><a href="#Get-in-touch-with-Santana" className="main-nav-link w-nav-link">Contact</a></nav>
                <div className="mobile-menu-nav w-nav-button">
                  <div className="mobile-menu-icon w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <section id="home" className="home-section">
              <div className="home-div"><img src="images/abstract-concrete-logo-home.png" width={524} alt="Abstrakt Concrete home logo" sizes="(max-width: 479px) 100vw, (max-width: 767px) 248px, (max-width: 991px) 373px, 524px" srcset="images/abstract-concrete-logo-home-p-500x394.png 500w, images/abstract-concrete-logo-home.png 557w" itemprop="logo" className="abstract-concrete-logo-home" /></div>
            </section>
            <div className="video-section">
              <div style={{paddingTop: '56.27659574468085%'}} className="w-video w-embed"><iframe className="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F162980924&url=https%3A%2F%2Fvimeo.com%2F162980924&image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F565887150_1280.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=vimeo" scrolling="no" frameborder={0} allowfullscreen /></div>
            </div>
            <section id="about" className="about-section">
              <div className="about-container w-container">
                <h2 className="h2-section-heading">about THE ARTIST</h2>
                <div data-ix="h1-underline" className="h1-white-underline w-hidden-small w-hidden-tiny" />
                <h1 itemprop="brand" className="about-h1">ABSTRAKT CONCRETE</h1>
                <h3 itemprop="founder" className="about-h3">SANTANA MATLOCK</h3>
                <div className="about-photos-div"><img src="images/about-santana-matlock.jpg" width={350} alt="Santana Matlock of Abstrakt Concrete" data-ix="about-pic" className="about-santana-matlock-pic" /><img src="images/about-santana-matlock-2.jpg" data-ix="about-pic" className="about-santana-matlock-pic w-hidden-tiny" /></div>
                <div data-ix="about-paragraph" className="about-paragraph-div">
                  <p className="about-paragraph">Concrete is all around us and is usually considered a cold, rough building material: functional but not beautiful. However, Santana’s original designs convert concrete into a marble-smooth and sleek artisanal product. Santana specializes in the <a href="#handcrafted-functional-concrete-kitchen-countertops" itemprop="itemOffered" className="about-p-link">custom design and production of concrete countertops, sinks, fire pits, and other products.</a></p>
                  <p className="about-paragraph">Santana’s artistic career began as a painter. However, he finds the thrill of 3-dimensional production of functional art pieces more rewarding. He also finds that the close interaction with his clients’ in his design process converts the usual experience of artistic solitude into a vital social interaction that brings fresh inspiration to his work.</p>
                </div>
              </div>
            </section>
            <section id="custom-kitchen-and-bathroom-countertops" className="custom-kitchen-countertops">
              <h2 className="h2-section-heading">CUSTOM work</h2>
              <div className="work-container w-container">
                <div data-ix="h1-underline" className="h1-black-underline w-hidden-small w-hidden-tiny" />
                <div data-animation="fade" data-duration={2000} data-infinite={1} data-delay={3500} data-autoplay={1} className="work-slider w-hidden-small w-hidden-tiny w-slider">
                  <div className="work-slider-mask w-slider-mask">
                    <div className="w-slide"><img src="images/slider-inside-santana-matlock-studio-abstrakt-concrete.jpg" alt="Santana Matlock's studio for making custom Nashville, TN concrete products" srcset="images/slider-inside-santana-matlock-studio-abstrakt-concrete-p-500x242.jpeg 500w, images/slider-inside-santana-matlock-studio-abstrakt-concrete-p-800x387.jpeg 800w, images/slider-inside-santana-matlock-studio-abstrakt-concrete.jpg 942w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" /></div>
                    <div className="w-slide"><img src="images/slider-guitar-sink-artisan-concrete.jpg" alt="Nashville, TN guitar sink" srcset="images/slider-guitar-sink-artisan-concrete-p-500x242.jpeg 500w, images/slider-guitar-sink-artisan-concrete.jpg 942w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" /></div>
                    <div className="w-slide"><img src="images/slider-sink-artisan-concrete.jpg" alt="Abrstrakt Concrete's countertop and sink with truck" srcset="images/slider-sink-artisan-concrete-p-500x242.jpeg 500w, images/slider-sink-artisan-concrete-p-800x387.jpeg 800w, images/slider-sink-artisan-concrete.jpg 942w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" /></div>
                  </div>
                  <div className="w-slider-arrow-left" />
                  <div className="w-slider-arrow-right" />
                  <div className="w-slider-nav w-round" />
                </div>
                <div className="work-row w-row">
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/guitar-sink.jpg" alt="guitar sink - perfect for Nashville, TN" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/artisan-sink-3.jpg" alt="gorgeous sink modeled in front of an old truck" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/Japanese-garden-fire-pit.jpg" alt="beautiful custom fire pit" className="work-image" /></a></div>
                </div>
                <div className="work-row w-row">
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/antique-wood-sink.jpg" alt="antique bathroom sink" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/concrete-planter.jpg" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/art-deco-sink.jpg" alt="Santana Matlock's custom bathroom sink " className="work-image" /></a></div>
                </div>
                <div className="work-row w-row">
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/custom-marbled-artisan-sink.jpg" alt="marble stained concrete sink" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/porch-sculpture-concrete-fire-pit.jpg" alt="Beautiful concrete fire pit" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/concrete-light-socket.jpg" alt="concrete light sink" className="work-image" /></a></div>
                </div>
                <div className="work-row w-row">
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/artisan-sink-2.jpg" alt="handcrafted artisan sink made from concrete" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/concrete-bike-table.jpg" alt="table made from a bike" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/dog-bone-drinking-fountain.jpg" alt="custom concrete dog bone birdbath" className="work-image" /></a></div>
                </div>
                <div className="work-row w-row">
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/long-grey-concrete-sink.jpg" alt="custom long grey sink" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/artisan-concrete-sink-and-couch.jpg" alt="concrete sink and couch" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/artisan-concrete-sink-1.jpg" alt="custom concrete sink with artsy wall" className="work-image" /></a></div>
                </div>
                <div className="work-row w-row">
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/artisan-sink-4.jpg" alt="sink with custom drain" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/black-and-gold-sink.jpg" alt="black and gold sink" className="work-image" /></a></div>
                  <div className="work-column w-col w-col-4"><a href="#" className="work-lightbox-link w-inline-block w-lightbox"><img src="images/handcrafted-wood-table-concrete.jpg" alt="handmade custom coffee table" className="work-image" /></a></div>
                </div>
              </div>
            </section>
            <section id="handcrafted-functional-concrete-kitchen-countertops" className="services-of-custom-concrete-products">
              <div className="services-container w-container">
                <h2 className="h2-section-heading">Collaboration &amp; HandCrafted FUNCTIONAL&nbsp;CONCRETE PRODUCTS</h2>
                <div data-ix="h1-underline" className="h1-white-underline w-hidden-small w-hidden-tiny" />
                <div className="w-row">
                  <div data-ix="services-column-1" className="services-column w-col w-col-6"><img src="images/services-handshake.png" width={67} alt="Santana Matlock - collaboration with clients icon" className="services-icon-handshake" />
                    <h3 className="services-h3">COLLABORATION</h3>
                    <p className="services-paragraph">Santana’s clients find it rewarding to work with a dedicated artistic craftsman to create the lasting artisanal pieces that they will be able to use in their daily lives. Says one of his many satisfied customers,&nbsp;<strong className="services-quotation-mark">“</strong><em itemprop="bestRating" className="services-quote">Santana’s enthusiastic inclusion of us as an important ingredient in the design process made us artistic partners and has made owning and using one of his pieces in our home very special.</em><strong className="services-quotation-mark">”</strong>&nbsp;</p><img src="images/abstract-consultation.png" width={100} alt="Abstrakt Concrete's ideas icon" className="services-icon w-hidden-small w-hidden-tiny" /></div>
                  <div data-ix="services-column-2" className="services-column w-col w-col-6"><img src="images/abstract-products.png" width={100} alt="Santana Matlock's products icon" className="services-icon" />
                    <h3 className="services-h3">CUSTOM PRODUCTS</h3>
                    <p className="services-paragraph">Santana prefers to produce non-stock pieces. &nbsp;And while he has many designs readily available from his portfolio, he enjoys the close interaction with a client to realize an original artistic statement. <strong className="services-quotation-mark">“</strong><em className="services-quote">My greatest reward is working closely with each client to assist them in realizing a design that reflects their unique personal taste.</em><strong className="services-quotation-mark">”</strong></p>
                    <ul className="services-list">
                      <li itemprop="itemOffered" className="services-list">Kitchen Counter Tops</li>
                      <li itemprop="itemOffered" className="services-list">Bathroom Counter Tops</li>
                      <li itemprop="itemOffered" className="services-list">Fire Pits</li>
                      <li itemprop="itemOffered" className="services-list">Fireplace Mantles</li>
                      <li className="services-list">Walk-in Shower Pans</li>
                      <li itemprop="itemOffered" className="services-list">Custom Concrete Furniture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section id="Santana-Matlock-in-the-news" className="abstrakt-concrete-media">
              <div className="news-container w-container">
                <h2 className="h2-section-heading">AbSTRAKT CONCRETE&nbsp;IN THE MEDIA</h2>
                <div data-ix="h1-underline" className="h1-white-underline w-hidden-small w-hidden-tiny" />
                <div className="news-diy-logo-columns w-row">
                  <div className="w-col w-col-6"><img src="images/diy-logo.png" width={477} data-ix="about-paragraph" alt="DIY Network logo" className="news-diy-logo" /></div>
                  <div className="news-columns w-col w-col-6"><img src="images/flip-nashville-graphic.png" data-ix="about-paragraph" alt="Nashville Flipped - DIY Network logo" width={269} className="news-diy-logo" /></div>
                </div>
                <p data-ix="about-paragraph" className="news-paragraph"><a href="#about" className="news-p-links">Santana</a> has been featured on <a target="_blank" href="https://www.facebook.com/nashvilleflipped" className="news-p-links">Nashville Flipped</a> on <a target="_blank" href="http://www.hgtv.com/shows/nashville-flipped" className="news-p-links">HGTV's DIY Network</a>&nbsp;with <a href="http://people.diynetwork.com/talent/troy-dean-shafer" target="_blank" className="news-p-links">Troy Dean Shafer</a>, professional house flipper, and the amazing Nashville, TN interior designer,<a href="#" itemprop="colleague" className="news-p-links"> Julie Couch</a>.</p>
              </div>
            </section>
            <section id="Get-in-touch-with-Santana" className="contact-santana-matlock">
              <div className="contact-section-container w-container">
                <h2 className="h2-section-heading">Lets talk!</h2>
                <div data-ix="h1-underline" className="h1-white-underline w-hidden-small w-hidden-tiny" />
                <div className="contact-row w-row">
                  <div className="work-column-1 w-clearfix w-col w-col-5">
                    <div className="contact-info-line-div w-clearfix"><a href="tel:1-615-743-5552" className="contact-icon-link w-inline-block"><img src="images/phone-abstrakt-concrete-contact.png" width={33} alt="Abstrakt Concrete - phone icon" className="contact-field-image" /></a>
                      <div className="contact-title-field w-hidden-small w-hidden-tiny">Phone:</div><a href="tel:1-615-743-5552" itemprop="telephone" className="contact-link">1-615-743-5552</a></div>
                    <div className="contact-info-line-div w-clearfix"><a href="mailto:abstraktconcrete@gmail.com?subject=email%20from%20www.abstraktconcrete%40gmail.com" className="contact-icon-link w-inline-block w-clearfix"><img src="images/email-abstrakt-concrete-contact.png" width={33} alt="Abstrakt Concrete - email icon" className="contact-field-image" /></a>
                      <div className="contact-title-field w-hidden-small w-hidden-tiny">Email:</div><a href="mailto:abstraktconcrete@gmail.com?subject=Email%20for%20www.abstraktconcrete.com!" itemprop="email" className="contact-link">santana@abstraktconcrete.com</a></div>
                    <div className="contact-info-line-div w-clearfix"><a href="#" className="contact-icon-link w-inline-block w-clearfix"><img src="images/location-abstrakt-concrete-contact.png" width={33} alt="Abstrakt Concrete - address icon" className="contact-field-image" /></a>
                      <div className="contact-title-field w-hidden-small w-hidden-tiny">Address:</div><a href="https://www.google.com/maps/place/1301+Meridian+St,+Nashville,+TN+37207/@36.1941063,-86.7692337,17z/data=!3m1!4b1!4m2!3m1!1s0x886467bc214517a7:0xe66dc38cb4fcdf50" target="_blank" itemprop="address" className="contact-link">1301 Meridian St., Nashville, TN</a></div>
                    <h3 className="contact-follow-title">FOLLOW &amp; CONNECT</h3>
                    <div data-ix="contact-follow-and-connect-underline" className="contact-follow-mobile-div-animate w-hidden-small w-hidden-tiny" />
                    <div className="contact-follow-mobile-div w-hidden-main w-clearfix"><a href="https://www.instagram.com/abstraktconcrete/" target="_blank" className="contact-follow-mobile-link-icon-left w-inline-block"><img src="images/follow-santana-matlock-instagram-mobile.png" alt="Abstrakt Concrete - instagram - mobile icon" className="contact-follow-mobile-icon" /></a></div>
                    <div className="contact-follow-mobile-div w-hidden-main w-clearfix"><a href="https://www.facebook.com/abstraktconcrete" target="_blank" className="contact-follow-mobile-icon-link-right w-inline-block"><img src="images/follow-santana-matlock-facebook-mobile.png" width={47} alt="Abstrakt Concrete - facebook - mobile icon" className="contact-follow-mobile-icon" /></a></div>
                    <div className="contact-info-line-div w-hidden-medium w-hidden-small w-hidden-tiny w-clearfix"><a href="http://instagram.com/abstraktconcrete/" target="_blank" className="contact-link-block w-inline-block"><img src="images/follow-santana-matlock-instagram.png" width={27} alt="Abstrakt Concrete - instagram - desktop icon" className="contact-link-icon w-hidden-medium w-hidden-small w-hidden-tiny" /></a><a href="https://www.instagram.com/abstraktconcrete/" target="_blank" className="contact-follow-tile-field-link">Instagram:</a><a href="http://instagram.com/abstraktconcrete/" target="_blank" className="contact-link w-hidden-medium w-hidden-small w-hidden-tiny">/abstraktconcrete</a></div>
                    <div className="contact-info-line-div w-hidden-medium w-hidden-small w-hidden-tiny w-clearfix"><a href="https://www.facebook.com/abstraktconcrete" target="_blank" className="contact-link-block w-inline-block"><img src="images/follow-santana-matlock-facbook.png" width={27} alt="Abstrakt Concrete - facebook - desktop icon" className="contact-link-icon w-hidden-medium w-hidden-small w-hidden-tiny" /></a><a href="https://www.facebook.com/abstraktconcrete" target="_blank" className="contact-follow-tile-field-link">Facebook:</a><a href="https://www.facebook.com/abstraktconcrete" target="_blank" className="contact-link w-hidden-medium w-hidden-small w-hidden-tiny">/abstraktconcrete</a></div>
                  </div>
                  <div className="contact-column-2 w-col w-col-7">
                    <div className="contact-form-div">
                      <div className="contact-section-forms w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" className="contact-form w-clearfix"><label htmlFor="name" className="contact-field-title">Name:</label><input type="text" id="name" name="name" data-name="Name" placeholder="Enter your name" maxlength={256} className="contact-field-text w-input" /><label htmlFor="email" className="contact-field-title">Email Address:</label><input type="email" className="contact-field-text w-input" maxlength={256} name="email" data-name="Email" placeholder="Enter your email" id="email" required /><label htmlFor="email" className="contact-field-title">Phone:</label><input type="text" id="Phone" name="Phone" data-name="Phone" placeholder="(optional) - use dashes where appropriate" maxlength={256} className="contact-field-text w-input" /><label htmlFor="Company-name" className="contact-field-title">Company Name:</label><input type="text" id="Company-name" name="Company-name" data-name="Company name" placeholder="(optional)" maxlength={256} className="contact-field-text w-input" /><label htmlFor="Message" className="contact-field-title">Message:</label><textarea id="Message" name="Message" placeholder="Your message here" maxlength={5000} data-name="Message" required className="contact-field-message w-input" /><input type="submit" defaultValue="CONTACT" data-wait="Please wait..." className="contact-submit-button w-button" /></form>
                        <div className="contact-message-success w-form-done">
                          <p className="contact-message-success-p">Looking forward to messaging you back!</p>
                        </div>
                        <div id="contact-message-error" className="contact-message-error w-form-fail">
                          <p id="contact-message-error-p" className="contact-message-error-p">Double check and try again :-)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-newsletter-form-div">
                <div className="contact-newsletter-container w-container">
                  <div className="contact-newsletter-wrapper w-form">
                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" action="//abstraktconcrete.us13.list-manage.com/subscribe/post?u=e880658c5ef84223dfdcff891&amp;id=341ad53ab7" method="post" className="contact-newsletter-form">
                      <h4 className="contact-newsletter-h4">SIGN UP FOR THE FREE NEWSLETTER!</h4>
                      <div className="contact-newsletter-columns w-row">
                        <div className="contact-newsletter-t-and-f w-col w-col-6"><input type="text" id="name-2" name="name" data-name="Name 2" placeholder="Enter your name" maxlength={256} className="contact-newsletter-text-field w-input" /></div>
                        <div className="contact-newsletter-t-and-f w-col w-col-6"><input type="email" className="contact-newsletter-text-field w-input" maxlength={256} name="email" data-name="Email 2" placeholder="Enter your email address" id="email-2" required /></div>
                      </div><input type="submit" defaultValue="SUBMIT" data-wait="Please wait..." className="contact-newsletter-submit-button w-button" /></form>
                    <div className="contact-newsletter-form-success-message w-form-done">
                      <p className="contact-newsletter-form-success-p">Thank you! Looking forward to sending you great stuff!</p>
                    </div>
                    <div className="contact-newsletter-form-error-message w-form-fail">
                      <p className="contact-newsletter-form-error-message-p">Whoops! Something went wrong while submitting...maybe, check you email address and try again?</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="footer-section">
              <div className="footer-main-div"><img src="images/Abstrakt-Concrete-Made-in-Nashville.png" alt="Made in Nashville" className="footer-made-in-nashville-pic" />
                <h2 className="footer-h2-made-in-nashville">Made in Nashville, TN</h2>
                <div className="footer-links"><a href="abstrakt-concretes-privacy-policy.html" className="footer-link">privacy</a> &nbsp;· &nbsp;<a href="http://www.abstraktconcrete.com/sitemap.xml" className="footer-link">sitemap</a></div>
              </div>
              <div className="footer-text-copyright">Copyright © 2016 &nbsp;·&nbsp; Abstrakt Concrete &nbsp;· &nbsp;Santana Matlock &nbsp;· &nbsp;<a className="footer-text-copyright-link" href="#home" itemprop="url">www.abstraktconcrete.com</a>&nbsp; · &nbsp;All Rights Are Reserved.</div>
              <div className="footer-designed-by">
                <a href="https://www.flowglobe.io/" target="_blank" data-ix="footer-designed-by-animate" className="footer-designed-by-link-block w-inline-block">
                  <div className="footer-designed-by-text">Website designed and developed by</div><img src="images/flow-globe-media-header-icon.png" width={274} className="footer-designed-by-graphic" /></a>
              </div>
            </section>
          </body>
        </div>
        );
