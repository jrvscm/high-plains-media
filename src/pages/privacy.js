import React from 'react';
import styled, { css } from 'styled-components';
import { device } from '../styles/breakpoints';
import Head from 'next/head';

const AboutHero = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: auto;
    background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 0.5)), url('/images/course-2.jpeg') no-repeat center center;
    background-size: cover;
    padding-top: 70px;

    @media ${device.tablet} {
      height: 32vh;
      padding-top: 70px;
    }

    @media (min-width: 768px) and (max-height: 450px) and (orientation: landscape) {
      height: 80vh;
      padding-top: 70px;
    }
`;

const Section = styled.section`
  background: #f8f4ea;
  padding-bottom: 100px;
`;

const SectionContentCentered = styled.div`

`;

const Body = styled.div.attrs({className: 'roboto-regular'})`
    padding: 100px;

    @media ${device.tablet} {
        padding: 20px;
    }
`; 



const Privacy = () => {
    return (
        <>
            <Head>
              <title>Privacy</title>
              <meta name="description" content="Your privacy matters to us at High Plains Media. Our Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website. Learn about your rights, how to access your information, and our commitment to protecting your privacy."/>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/images/highplains-logo-v2.svg" media="(prefers-color-scheme: dark)" />
            <link rel="icon" href="/high-plains-favicon-dark.svg" media="(prefers-color-scheme: light)" />
            </Head>

            <Section>
                <SectionContentCentered $background={'#fff'}>
                <Body data-custom-classname="body">
  <div>
    <strong>
      <span style={{fontSize: '26px'}}>
        <span data-custom-classname="title">
          <bdt className="block-component"></bdt>
          <bdt className="question">PRIVACY POLICY</bdt>
          <bdt className="statement-end-if-in-editor"></bdt>
        </span>
      </span>
    </strong>
  </div>
  <div>
    <br />
  </div>
  <div>
    <span style={{color: 'rgb(127, 127, 127)'}}>
      <strong>
        <span style={{fontSize: '15px'}}>
          <span data-custom-classname="subtitle">Last updated <bdt className="question">March 28, 2024</bdt>
          </span>
        </span>
      </strong>
    </span>
  </div>
  <div>
    <br />
  </div>
  <div>
    <br />
  </div>
  <div>
    <br />
  </div>
  <div style={{lineHeight: 1.5}}>
    <span style={{color: 'rgb(127, 127, 127)'}}>
      <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
        <span data-custom-classname="body_text">This privacy notice for <bdt className="question">Julie&quot;s Caring Heart Foundation <bdt className="block-component"></bdt>
          </bdt> ( <bdt className="block-component"></bdt>&quot; <strong>we</strong>,&quot; &quot; <strong>us</strong>,&quot; or &quot; <strong>our</strong>&quot; <bdt className="statement-end-if-in-editor"></bdt>
        </span>
        <span data-custom-classname="body_text">), describes how and why we might collect, store, use, and/or share ( <bdt className="block-component"></bdt>&quot; <strong>process</strong>&quot; <bdt className="statement-end-if-in-editor"></bdt>) your information when you use our services ( <bdt className="block-component"></bdt>&quot; <strong>Services</strong>&quot; <bdt className="statement-end-if-in-editor"></bdt>), such as when you: </span>
      </span>
    </span>
    <span style={{fontSize: '15px'}}>
      <span style={{color: 'rgb(127, 127, 127)'}}>
        <span data-custom-classname="body_text">
          <span style={{color: 'rgb(89, 89, 89)'}}>
            <span data-custom-classname="body_text">
              <bdt className="block-component"></bdt>
            </span>
          </span>
        </span>
      </span>
    </span>
  </div>
  <ul>
    <li style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">Visit our website <bdt className="block-component"></bdt> at <span style={{color: 'rgb(0, 58, 250)'}}>
              <bdt className="question">
                <a href="http://www.highplainsmedia.com" target="_blank" data-custom-classname="link">http://www.highplainsmedia.com</a>
              </bdt>
            </span>
            <span style={{fontSize: '15px'}}>
              <span style={{color: 'rgb(89, 89, 89)'}}>
                <span data-custom-classname="body_text">
                  <span style={{fontSize: '15px'}}>
                    <span style={{color: 'rgb(89, 89, 89)'}}>
                      <bdt className="statement-end-if-in-editor">, or any website of ours that links to this privacy notice</bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </li>
  </ul>
  <div>
    <bdt className="block-component">
      <span style={{fontSize: '15px'}}>
        <span style={{fontSize: '15px'}}>
          <span style={{color: 'rgb(127, 127, 127)'}}>
            <span data-custom-classname="body_text">
              <span style={{color: 'rgb(89, 89, 89)'}}>
                <span data-custom-classname="body_text">
                  <bdt className="block-component"></bdt>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </bdt>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span style={{color: 'rgb(127, 127, 127)'}}>
          <span data-custom-classname="body_text">
            <span style={{color: 'rgb(89, 89, 89)'}}>
              <span data-custom-classname="body_text">
                <bdt className="block-component"></bdt>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <ul>
      <li style={{lineHeight: 1.5}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
            <span data-custom-classname="body_text">Engage with us in other related ways, including any sales, marketing, or events <span style={{fontSize: '15px'}}>
                <span style={{color: 'rgb(89, 89, 89)'}}>
                  <span data-custom-classname="body_text">
                    <span style={{fontSize: '15px'}}>
                      <span style={{color: 'rgb(89, 89, 89)'}}>
                        <bdt className="statement-end-if-in-editor"></bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </li>
    </ul>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span style={{color: 'rgb(127, 127, 127)'}}>
          <span data-custom-classname="body_text">
            <strong>Questions or concerns?&nbsp;</strong>Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. <bdt className="block-component"></bdt> If you still have any questions or concerns, please contact us at <bdt className="question">privacy@highplainsmedia.com</bdt>. </span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <strong>
        <span style={{fontSize: '15px'}}>
          <span data-custom-classname="heading_1">SUMMARY OF KEY POINTS</span>
        </span>
      </strong>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <strong>
            <em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our&nbsp;</em>
          </strong>
        </span>
      </span>
      <a data-custom-classname="link" href="#toc">
        <span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}>
          <span data-custom-classname="body_text">
            <strong>
              <em>table of contents</em>
            </strong>
          </span>
        </span>
      </a>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <strong>
            <em>&nbsp;below to find the section you are looking for.</em>
          </strong>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about&nbsp; </span>
      </span>
      <a data-custom-classname="link" href="#personalinfo">
        <span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}>
          <span data-custom-classname="body_text">personal information you disclose to us</span>
        </span>
      </a>
      <span data-custom-classname="body_text">.</span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <strong>Do we process any sensitive personal information?</strong>
          <bdt className="block-component"></bdt>We do not process sensitive personal information. <bdt className="else-block"></bdt>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <strong>Do we receive any information from third parties?</strong>
          <bdt className="block-component"></bdt>We do not receive any information from third parties. <bdt className="else-block"></bdt>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about&nbsp; </span>
      </span>
      <a data-custom-classname="link" href="#infouse">
        <span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}>
          <span data-custom-classname="body_text">how we process your information</span>
        </span>
      </a>
      <span data-custom-classname="body_text">.</span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <strong>In what situations and with which <bdt className="block-component"></bdt>parties do we share personal information? </strong> We may share information in specific situations and with specific <bdt className="block-component"></bdt>third parties. Learn more about&nbsp; </span>
      </span>
      <a data-custom-classname="link" href="#whoshare">
        <span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}>
          <span data-custom-classname="body_text">when and with whom we share your personal information</span>
        </span>
      </a>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">. <bdt className="block-component"></bdt>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <strong>How do we keep your information safe?</strong> We have <bdt className="block-component"></bdt>organizational <bdt className="statement-end-if-in-editor"></bdt> and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be &quot;100%&quot; secure, so we cannot promise or guarantee that hackers, cybercriminals, or other <bdt className="block-component"></bdt>unauthorized <bdt className="statement-end-if-in-editor"></bdt> third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about&nbsp; </span>
      </span>
      <a data-custom-classname="link" href="#infosafe">
        <span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}>
          <span data-custom-classname="body_text">how we keep your information safe</span>
        </span>
      </a>
      <span data-custom-classname="body_text">.</span>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <bdt className="statement-end-if-in-editor"></bdt>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about&nbsp; </span>
      </span>
      <a data-custom-classname="link" href="#privacyrights">
        <span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}>
          <span data-custom-classname="body_text">your privacy rights</span>
        </span>
      </a>
      <span data-custom-classname="body_text">.</span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by <bdt className="block-component">submitting a&nbsp;</bdt>
        </span>
      </span>
      <a data-custom-classname="link" href="https://app.termly.io/notify/a91cd01a-57aa-4551-a766-70ae6a132c07" rel="noopener noreferrer" target="_blank">
        <span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}>
          <span data-custom-classname="body_text">data subject access request</span>
        </span>
      </a>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <bdt className="block-component"></bdt>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">Want to learn more about what we do with any information we collect?&nbsp;</span>
      </span>
      <a data-custom-classname="link" href="#toc">
        <span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}>
          <span data-custom-classname="body_text">Review the privacy notice in full</span>
        </span>
      </a>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">.</span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div id="toc" style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span style={{color: 'rgb(127, 127, 127)'}}>
          <span style={{color: 'rgb(0, 0, 0)'}}>
            <strong>
              <span data-custom-classname="heading_1">TABLE OF CONTENTS</span>
            </strong>
          </span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <a data-custom-classname="link" href="#infocollect">
          <span style={{color: 'rgb(0, 58, 250)'}}>1. WHAT INFORMATION DO WE COLLECT?</span>
        </a>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <a data-custom-classname="link" href="#infouse">
          <span style={{color: 'rgb(0, 58, 250)'}}>2. HOW DO WE PROCESS YOUR INFORMATION? <bdt className="block-component"></bdt>
          </span>
        </a>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span style={{color: 'rgb(0, 58, 250)'}}>
          <a data-custom-classname="link" href="#whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>
        </span>
        <span data-custom-classname="body_text">
          <bdt className="block-component"></bdt>
          <span style={{color: 'rgb(127, 127, 127)'}}>
            <span style={{color: 'rgb(89, 89, 89)'}}>
              <span data-custom-classname="body_text">
                <span style={{color: 'rgb(89, 89, 89)'}}>
                  <bdt className="block-component"></bdt>
                </span>
              </span>
              <span data-custom-classname="body_text">
                <span style={{color: 'rgb(89, 89, 89)'}}>
                  <span style={{color: 'rgb(89, 89, 89)'}}>
                    <span style={{color: 'rgb(89, 89, 89)'}}>
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                  <bdt className="block-component"></bdt>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <a data-custom-classname="link" href="#inforetain">
          <span style={{color: 'rgb(0, 58, 250)'}}>4. HOW LONG DO WE KEEP YOUR INFORMATION?</span>
        </a>
        <span style={{color: 'rgb(127, 127, 127)'}}>
          <span style={{color: 'rgb(89, 89, 89)'}}>
            <span data-custom-classname="body_text">
              <span style={{color: 'rgb(89, 89, 89)'}}>
                <span style={{color: 'rgb(89, 89, 89)'}}>
                  <bdt className="block-component"></bdt>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <a data-custom-classname="link" href="#infosafe">
          <span style={{color: 'ActiveBorder'}}>5. HOW DO WE KEEP YOUR INFORMATION SAFE?</span>
        </a>
        <span style={{color: 'rgb(127, 127, 127)'}}>
          <span style={{color: 'rgb(89, 89, 89)'}}>
            <span data-custom-classname="body_text">
              <span style={{color: 'rgb(89, 89, 89)'}}>
                <bdt className="statement-end-if-in-editor"></bdt>
                <bdt className="block-component"></bdt>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <a data-custom-classname="link" href="#infominors">
          <span style={{color: 'rgb(0, 58, 250)'}}>6. DO WE COLLECT INFORMATION FROM MINORS?</span>
        </a>
        <span style={{color: 'rgb(127, 127, 127)'}}>
          <span style={{color: 'rgb(89, 89, 89)'}}>
            <span data-custom-classname="body_text">
              <span style={{color: 'rgb(89, 89, 89)'}}>
                <bdt className="statement-end-if-in-editor"></bdt>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span style={{color: 'rgb(0, 58, 250)'}}>
          <a data-custom-classname="link" href="#privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</a>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <a data-custom-classname="link" href="#DNT">
          <span style={{color: 'rgb(0, 58, 250)'}}>8. CONTROLS FOR DO-NOT-TRACK FEATURES <bdt className="block-component"></bdt>
          </span>
        </a>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <a data-custom-classname="link" href="#uslaws">
          <span style={{color: 'rgb(0, 58, 250)'}}>9. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span>
        </a>
      </span>
      <bdt className="block-component">
        <span style={{fontSize: '15px'}}>
          <span data-custom-classname="body_text"></span>
        </span>
      </bdt>
    </div>
    <div style={{lineHeight: 1.5}}>
      <bdt className="block-component">
        <span style={{fontSize: '15px'}}></span>
      </bdt>
      <bdt className="block-component"></bdt>
      <bdt className="block-component"></bdt>
      <bdt className="block-component"></bdt>
      <bdt className="block-component"></bdt>
      <bdt className="block-component"></bdt>
      <bdt className="block-component"></bdt>
      <bdt className="block-component"></bdt>
      <bdt className="block-component"></bdt>
      <bdt className="block-component"></bdt>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <a data-custom-classname="link" href="#policyupdates">
          <span style={{color: 'rgb(0, 58, 250)'}}>10. DO WE MAKE UPDATES TO THIS NOTICE?</span>
        </a>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <a data-custom-classname="link" href="#contact">
        <span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span>
      </a>
    </div>
    <div style={{lineHeight: 1.5}}>
      <a data-custom-classname="link" href="#request">
        <span style={{color: 'rgb(0, 58, 250)'}}>12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span>
      </a>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div id="infocollect" style={{lineHeight: 1.5}}>
      <span style={{color: 'rgb(0, 0, 0)'}}>
        <span style={{color: 'rgb(0, 0, 0)', fontSize: '15px'}}>
          <span style={{fontSize: '15px', color: 'rgb(0, 0, 0)'}}>
            <span style={{fontSize: '15px', color: 'rgb(0, 0, 0)'}}>
              <span id="control" style={{color: 'rgb(0, 0, 0)'}}>
                <strong>
                  <span data-custom-classname="heading_1">1. WHAT INFORMATION DO WE COLLECT?</span>
                </strong>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div id="personalinfo" style={{lineHeight: 1.5}}>
      <span data-custom-classname="heading_2" style={{color: 'rgb(0, 0, 0)'}}>
        <span style={{fontSize: '15px'}}>
          <strong>Personal information you disclose to us</strong>
        </span>
      </span>
    </div>
    <div>
      <div>
        <br />
      </div>
      <div style={{lineHeight: 1.5}}>
        <span style={{color: 'rgb(127, 127, 127)'}}>
          <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
            <span data-custom-classname="body_text">
              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                  <span data-custom-classname="body_text">
                    <strong>
                      <em>In Short:</em>
                    </strong>
                  </span>
                </span>
              </span>
            </span>
            <span data-custom-classname="body_text">
              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                  <span data-custom-classname="body_text">
                    <strong>
                      <em>&nbsp;</em>
                    </strong>
                    <em>We collect personal information that you provide to us.</em>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">We collect personal information that you voluntarily provide to us when you <span style={{fontSize: '15px'}}>
              <bdt className="block-component"></bdt>
            </span>
          </span>
          <span data-custom-classname="body_text">express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">
            <span style={{fontSize: '15px'}}>
              <bdt className="block-component"></bdt>
            </span>
          </span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">
            <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following: <span style={{fontSize: '15px'}}>
              <span data-custom-classname="body_text">
                <bdt className="forloop-component"></bdt>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <ul>
      <li style={{lineHeight: 1.5}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
            <span data-custom-classname="body_text">
              <span style={{fontSize: '15px'}}>
                <span data-custom-classname="body_text">
                  <bdt className="question">names</bdt>
                </span>
              </span>
            </span>
          </span>
        </span>
      </li>
    </ul>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">
            <span style={{fontSize: '15px'}}>
              <span data-custom-classname="body_text">
                <bdt className="forloop-component"></bdt>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <ul>
      <li style={{lineHeight: 1.5}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
            <span data-custom-classname="body_text">
              <span style={{fontSize: '15px'}}>
                <span data-custom-classname="body_text">
                  <bdt className="question">phone numbers</bdt>
                </span>
              </span>
            </span>
          </span>
        </span>
      </li>
    </ul>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">
            <span style={{fontSize: '15px'}}>
              <span data-custom-classname="body_text">
                <bdt className="forloop-component"></bdt>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <ul>
      <li style={{lineHeight: 1.5}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
            <span data-custom-classname="body_text">
              <span style={{fontSize: '15px'}}>
                <span data-custom-classname="body_text">
                  <bdt className="question">email addresses</bdt>
                </span>
              </span>
            </span>
          </span>
        </span>
      </li>
    </ul>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">
            <span style={{fontSize: '15px'}}>
              <span data-custom-classname="body_text">
                <bdt className="forloop-component"></bdt>
              </span>
              <span data-custom-classname="body_text">
                <bdt className="statement-end-if-in-editor"></bdt>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <div id="sensitiveinfo" style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <strong>Sensitive Information.</strong>
          <bdt className="block-component"></bdt>We do not process sensitive information.
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <bdt className="else-block"></bdt>
        </span>
      </span>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">
            <span style={{fontSize: '15px'}}>
              <span data-custom-classname="body_text">
                <bdt className="block-component"></bdt>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">
            <strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by <bdt className="forloop-component"></bdt>
            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                <span data-custom-classname="body_text">
                  <span style={{fontSize: '15px'}}>
                    <span data-custom-classname="body_text">
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <bdt className="question">Stripe</bdt>
            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                <span data-custom-classname="body_text">
                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                    <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                      <span data-custom-classname="body_text">
                        <span style={{fontSize: '15px'}}>
                          <span data-custom-classname="body_text">
                            <bdt className="block-component"></bdt>
                          </span>
                        </span>
                      </span>
                      <span data-custom-classname="body_text">
                        <span style={{fontSize: '15px'}}>
                          <span style={{color: 'rgb(89, 89, 89)'}}>
                            <span data-custom-classname="body_text">
                              <span style={{fontSize: '15px'}}>
                                <span style={{color: 'rgb(89, 89, 89)'}}>
                                  <span data-custom-classname="body_text">
                                    <span style={{color: 'rgb(89, 89, 89)'}}>
                                      <span style={{fontSize: '15px'}}>
                                        <span data-custom-classname="body_text">
                                          <bdt className="forloop-component"></bdt>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>. You may find their privacy notice link(s) here: <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                    <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                      <span data-custom-classname="body_text">
                        <bdt className="forloop-component"></bdt>
                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                            <span data-custom-classname="body_text">
                              <span style={{fontSize: '15px'}}>
                                <span data-custom-classname="body_text">
                                  <bdt className="block-component"></bdt>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span style={{color: 'rgb(0, 58, 250)'}}>
                    <bdt className="question">
                      <a href="https://stripe.com/privacy" target="_blank" data-custom-classname="link">https://stripe.com/privacy</a>
                    </bdt>
                  </span>
                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                    <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                      <span data-custom-classname="body_text">
                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                            <span data-custom-classname="body_text">
                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                  <span data-custom-classname="body_text">
                                    <span style={{fontSize: '15px'}}>
                                      <span data-custom-classname="body_text">
                                        <bdt className="block-component"></bdt>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <bdt className="forloop-component"></bdt>
                        <span style={{fontSize: '15px'}}>
                          <span data-custom-classname="body_text">. <bdt className="block-component"></bdt>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">
            <span style={{fontSize: '15px'}}>
              <span data-custom-classname="body_text">
                <bdt className="statement-end-if-in-editor">
                  <bdt className="block-component"></bdt>
                </bdt>
              </span>
            </span>
          </span>
        </span>
        <bdt className="block-component"></bdt>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">
            <bdt className="block-component"></bdt>
          </span>
          <span data-custom-classname="body_text">
            <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
              <span data-custom-classname="body_text">
                <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                  <span data-custom-classname="body_text">
                    <bdt className="statement-end-if-in-editor">
                      <bdt className="block-component"></bdt>
                    </bdt>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span style={{fontSize: '15px'}}>
        <span data-custom-classname="body_text">
          <bdt className="block-component"></bdt>
        </span>
      </span>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div id="infouse" style={{lineHeight: 1.5}}>
      <span style={{color: 'rgb(127, 127, 127)'}}>
        <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
              <span id="control" style={{color: 'rgb(0, 0, 0)'}}>
                <strong>
                  <span data-custom-classname="heading_1">2. HOW DO WE PROCESS YOUR INFORMATION?</span>
                </strong>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <div>
      <div style={{lineHeight: 1.5}}>
        <br />
      </div>
      <div style={{lineHeight: 1.5}}>
        <span style={{color: 'rgb(127, 127, 127)'}}>
          <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
            <span data-custom-classname="body_text">
              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                  <span data-custom-classname="body_text">
                    <strong>
                      <em>In Short:&nbsp;</em>
                    </strong>
                    <em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
    </div>
    <div style={{lineHeight: 1.5}}>
      <br />
    </div>
    <div style={{lineHeight: 1.5}}>
      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span data-custom-classname="body_text">
            <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
            <bdt className="block-component"></bdt>
          </span>
        </span>
      </span>
      <div style={{lineHeight: 1.5}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
            <span data-custom-classname="body_text">
              <bdt className="block-component"></bdt>
            </span>
          </span>
        </span>
      </div>
      <ul>
        <li style={{lineHeight: 1.5}}>
          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
              <span data-custom-classname="body_text">
                <strong>To deliver and facilitate delivery of services to the user.&nbsp;</strong>We may process your information to provide you with the requested service. <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                    <span data-custom-classname="body_text">
                      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                          <span data-custom-classname="body_text">
                            <span style={{fontSize: '15px'}}>
                              <span style={{color: 'rgb(89, 89, 89)'}}>
                                <span data-custom-classname="body_text">
                                  <span style={{fontSize: '15px'}}>
                                    <span style={{color: 'rgb(89, 89, 89)'}}>
                                      <span data-custom-classname="body_text">
                                        <bdt className="statement-end-if-in-editor"></bdt>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </li>
      </ul>
      <div style={{lineHeight: 1.5}}>
        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
            <span data-custom-classname="body_text">
              <bdt className="block-component"></bdt>
            </span>
          </span>
        </span>
        <div style={{lineHeight: 1.5}}>
          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
              <span data-custom-classname="body_text">
                <bdt className="block-component"></bdt>
              </span>
            </span>
          </span>
          <div style={{lineHeight: 1.5}}>
            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                <span data-custom-classname="body_text">
                  <bdt className="block-component"></bdt>
                </span>
              </span>
            </span>
            <div style={{lineHeight: 1.5}}>
              <bdt className="block-component">
                <span style={{fontSize: '15px'}}></span>
              </bdt>
            </div>
            <ul>
              <li style={{lineHeight: 1.5}}>
                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                    <span data-custom-classname="body_text">
                      <strong>To send administrative information to you.&nbsp;</strong>We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information. <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                          <span data-custom-classname="body_text">
                            <bdt className="statement-end-if-in-editor"></bdt>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
            </ul>
            <div style={{lineHeight: 1.5}}>
              <bdt className="block-component">
                <span style={{fontSize: '15px'}}></span>
              </bdt>
              <div style={{lineHeight: 1.5}}>
                <bdt className="block-component">
                  <span style={{fontSize: '15px'}}></span>
                </bdt>
              </div>
              <ul>
                <li style={{lineHeight: 1.5}}>
                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                    <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                      <span data-custom-classname="body_text">
                        <strong>To <bdt className="block-component"></bdt>fulfill <bdt className="statement-end-if-in-editor"></bdt> and manage your orders.&nbsp; </strong>We may process your information to <bdt className="block-component"></bdt>fulfill <bdt className="statement-end-if-in-editor"></bdt> and manage your orders, payments, returns, and exchanges made through the Services. <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                            <span data-custom-classname="body_text">
                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                  <span data-custom-classname="body_text">
                                    <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                        <span data-custom-classname="body_text">
                                          <bdt className="statement-end-if-in-editor"></bdt>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{lineHeight: 1.5}}>
                <bdt className="block-component">
                  <span style={{fontSize: '15px'}}>
                    <span data-custom-classname="body_text"></span>
                  </span>
                </bdt>
                <p style={{fontSize: '15px', lineHeight: 1.5}}>
                  <bdt className="block-component">
                    <span style={{fontSize: '15px'}}></span>
                  </bdt>
                </p>
                <p style={{fontSize: '15px', lineHeight: 1.5}}>
                  <bdt className="block-component">
                    <span style={{fontSize: '15px'}}></span>
                  </bdt>
                </p>
                <p style={{fontSize: '15px', lineHeight: 1.5}}>
                  <bdt className="block-component"></bdt>
                </p>
                <p style={{fontSize: '15px', lineHeight: 1.5}}>
                  <bdt className="block-component"></bdt>
                </p>
                <div style={{lineHeight: 1.5}}>
                  <bdt className="block-component">
                    <span style={{fontSize: '15px'}}>
                      <span data-custom-classname="body_text"></span>
                    </span>
                  </bdt>
                  <div style={{lineHeight: 1.5}}>
                    <bdt className="block-component">
                      <span style={{fontSize: '15px'}}></span>
                    </bdt>
                    <div style={{lineHeight: 1.5}}>
                      <bdt className="block-component">
                        <span style={{fontSize: '15px'}}></span>
                      </bdt>
                      <div style={{lineHeight: 1.5}}>
                        <span style={{fontSize: '15px'}}>
                          <bdt className="block-component">
                            <span data-custom-classname="body_text"></span>
                          </bdt>
                        </span>
                        <div style={{lineHeight: 1.5}}>
                          <bdt className="block-component">
                            <span style={{fontSize: '15px'}}>
                              <span data-custom-classname="body_text"></span>
                            </span>
                          </bdt>
                          <div style={{lineHeight: 1.5}}>
                            <bdt className="block-component">
                              <span style={{fontSize: '15px'}}>
                                <span data-custom-classname="body_text"></span>
                              </span>
                            </bdt>
                            <div style={{lineHeight: 1.5}}>
                              <bdt className="block-component">
                                <span style={{fontSize: '15px'}}>
                                  <span data-custom-classname="body_text"></span>
                                </span>
                              </bdt>
                              <div style={{lineHeight: 1.5}}>
                                <bdt className="block-component">
                                  <span style={{fontSize: '15px'}}>
                                    <span data-custom-classname="body_text"></span>
                                  </span>
                                </bdt>
                              </div>
                              <ul>
                                <li style={{lineHeight: 1.5}}>
                                  <span data-custom-classname="body_text">
                                    <span style={{fontSize: '15px'}}>
                                      <strong>To administer prize draws and competitions.</strong> We may process your information to administer prize draws and competitions. </span>
                                  </span>
                                  <bdt className="statement-end-if-in-editor">
                                    <span style={{fontSize: '15px'}}>
                                      <span data-custom-classname="body_text"></span>
                                    </span>
                                  </bdt>
                                </li>
                              </ul>
                              <div style={{lineHeight: 1.5}}>
                                <bdt className="block-component">
                                  <span style={{fontSize: '15px'}}>
                                    <span data-custom-classname="body_text"></span>
                                  </span>
                                </bdt>
                                <div style={{lineHeight: 1.5}}>
                                  <bdt className="block-component">
                                    <span style={{fontSize: '15px'}}>
                                      <span data-custom-classname="body_text"></span>
                                    </span>
                                  </bdt>
                                  <div style={{lineHeight: 1.5}}>
                                    <bdt className="block-component">
                                      <span style={{fontSize: '15px'}}>
                                        <span data-custom-classname="body_text"></span>
                                      </span>
                                    </bdt>
                                    <div style={{lineHeight: 1.5}}>
                                      <bdt className="block-component">
                                        <span style={{fontSize: '15px'}}>
                                          <span data-custom-classname="body_text"></span>
                                        </span>
                                      </bdt>
                                      <div style={{lineHeight: 1.5}}>
                                        <bdt className="block-component">
                                          <span style={{fontSize: '15px'}}>
                                            <span data-custom-classname="body_text"></span>
                                          </span>
                                        </bdt>
                                        <div style={{lineHeight: 1.5}}>
                                          <bdt className="block-component">
                                            <span style={{fontSize: '15px'}}>
                                              <span data-custom-classname="body_text"></span>
                                            </span>
                                          </bdt>
                                        </div>
                                        <ul>
                                          <li style={{lineHeight: 1.5}}>
                                            <span style={{fontSize: '15px'}}>
                                              <span data-custom-classname="body_text">
                                                <strong>To comply with our legal obligations.</strong> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights. <bdt className="statement-end-if-in-editor"></bdt>
                                              </span>
                                            </span>
                                          </li>
                                        </ul>
                                        <div style={{lineHeight: 1.5}}>
                                          <bdt className="block-component">
                                            <span style={{fontSize: '15px'}}>
                                              <span data-custom-classname="body_text"></span>
                                            </span>
                                          </bdt>
                                          <div style={{lineHeight: 1.5}}>
                                            <bdt className="block-component">
                                              <span style={{fontSize: '15px'}}>
                                                <span data-custom-classname="body_text"></span>
                                              </span>
                                            </bdt>
                                            <bdt className="block-component">
                                              <span style={{fontSize: '15px'}}>
                                                <span data-custom-classname="body_text"></span>
                                              </span>
                                            </bdt>
                                            <bdt className="block-component">
                                              <span style={{fontSize: '15px'}}>
                                                <span data-custom-classname="body_text"></span>
                                              </span>
                                            </bdt>
                                            <bdt className="block-component">
                                              <span style={{fontSize: '15px'}}>
                                                <span data-custom-classname="body_text"></span>
                                              </span>
                                            </bdt>
                                          </div>
                                          <div style={{lineHeight: 1.5}}>
                                            <br />
                                          </div>
                                          <div id="whoshare" style={{lineHeight: 1.5}}>
                                            <span style={{color: 'rgb(127, 127, 127)'}}>
                                              <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                    <span id="control" style={{color: 'rgb(0, 0, 0)'}}>
                                                      <strong>
                                                        <span data-custom-classname="heading_1">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span>
                                                      </strong>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </div>
                                          <div style={{lineHeight: 1.5}}>
                                            <br />
                                          </div>
                                          <div style={{lineHeight: 1.5}}>
                                            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                <span data-custom-classname="body_text">
                                                  <strong>
                                                    <em>In Short:</em>
                                                  </strong>
                                                  <em>&nbsp;We may share information in specific situations described in this section and/or with the following <bdt className="block-component"></bdt>third parties. </em>
                                                </span>
                                              </span>
                                            </span>
                                          </div>
                                          <div style={{lineHeight: 1.5}}>
                                            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                <span data-custom-classname="body_text">
                                                  <bdt className="block-component"></bdt>
                                                </span>
                                              </span>
                                            </span>
                                          </div>
                                          <div style={{lineHeight: 1.5}}>
                                            <br />
                                          </div>
                                          <div style={{lineHeight: 1.5}}>
                                            <span style={{fontSize: '15px'}}>
                                              <span data-custom-classname="body_text">We <bdt className="block-component"></bdt>may need to share your personal information in the following situations: </span>
                                            </span>
                                          </div>
                                          <ul>
                                            <li style={{lineHeight: 1.5}}>
                                              <span style={{fontSize: '15px'}}>
                                                <span data-custom-classname="body_text">
                                                  <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company. </span>
                                              </span>
                                            </li>
                                          </ul>
                                          <div style={{lineHeight: 1.5}}>
                                            <bdt className="block-component">
                                              <span style={{fontSize: '15px'}}></span>
                                            </bdt>
                                            <div style={{lineHeight: 1.5}}>
                                              <span style={{fontSize: '15px'}}>
                                                <span data-custom-classname="body_text">
                                                  <bdt className="block-component"></bdt>
                                                </span>
                                              </span>
                                              <div style={{lineHeight: 1.5}}>
                                                <span style={{fontSize: '15px'}}>
                                                  <bdt className="block-component">
                                                    <span data-custom-classname="body_text"></span>
                                                  </bdt>
                                                </span>
                                                <div style={{lineHeight: 1.5}}>
                                                  <bdt className="block-component">
                                                    <span style={{fontSize: '15px'}}>
                                                      <span data-custom-classname="body_text"></span>
                                                    </span>
                                                  </bdt>
                                                  <div style={{lineHeight: 1.5}}>
                                                    <bdt className="block-component">
                                                      <span style={{fontSize: '15px'}}>
                                                        <span data-custom-classname="body_text"></span>
                                                      </span>
                                                    </bdt>
                                                    <div style={{lineHeight: 1.5}}>
                                                      <bdt className="block-component">
                                                        <span style={{fontSize: '15px'}}>
                                                          <span data-custom-classname="body_text"></span>
                                                        </span>
                                                      </bdt>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <bdt className="block-component">
                                                          <span style={{fontSize: '15px'}}>
                                                            <span data-custom-classname="body_text"></span>
                                                          </span>
                                                        </bdt>
                                                        <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                          <span style={{fontSize: '15px'}}>
                                                            <span style={{color: 'rgb(89, 89, 89)'}}>
                                                              <span style={{fontSize: '15px'}}>
                                                                <span style={{color: 'rgb(89, 89, 89)'}}>
                                                                  <bdt className="block-component">
                                                                    <span data-custom-classname="heading_1"></span>
                                                                  </bdt>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                        <span data-custom-classname="body_text">
                                                          <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                            <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                              <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                                <span style={{fontSize: '15px'}}>
                                                                  <span style={{color: 'rgb(89, 89, 89)'}}>
                                                                    <span style={{fontSize: '15px'}}>
                                                                      <span style={{color: 'rgb(89, 89, 89)'}}>
                                                                        <span data-custom-classname="body_text">
                                                                          <bdt className="block-component"></bdt>
                                                                        </span>
                                                                        <bdt className="block-component">
                                                                          <span data-custom-classname="body_text">
                                                                            <bdt className="block-component"></bdt>
                                                                          </span>
                                                                        </bdt>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div id="inforetain" style={{lineHeight: 1.5}}>
                                                        <span style={{color: 'rgb(127, 127, 127)'}}>
                                                          <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                <span id="control" style={{color: 'rgb(0, 0, 0)'}}>
                                                                  <strong>
                                                                    <span data-custom-classname="heading_1">4. HOW LONG DO WE KEEP YOUR INFORMATION?</span>
                                                                  </strong>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">
                                                              <strong>
                                                                <em>In Short:&nbsp;</em>
                                                              </strong>
                                                              <em>We keep your information for as long as necessary to <bdt className="block-component"></bdt>fulfill <bdt className="statement-end-if-in-editor"></bdt> the purposes outlined in this privacy notice unless otherwise required by law. </em>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). <bdt className="block-component"></bdt>
                                                            </span>&nbsp; </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">When we have no ongoing legitimate business need to process your personal information, we will either delete or <bdt className="block-component"></bdt>anonymize <bdt className="statement-end-if-in-editor"></bdt> such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible. <span style={{color: 'rgb(89, 89, 89)'}}>
                                                                <bdt className="block-component"></bdt>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div id="infosafe" style={{lineHeight: 1.5}}>
                                                        <span style={{color: 'rgb(127, 127, 127)'}}>
                                                          <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                <span id="control" style={{color: 'rgb(0, 0, 0)'}}>
                                                                  <strong>
                                                                    <span data-custom-classname="heading_1">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</span>
                                                                  </strong>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">
                                                              <strong>
                                                                <em>In Short:&nbsp;</em>
                                                              </strong>
                                                              <em>We aim to protect your personal information through a system of <bdt className="block-component"></bdt>organizational <bdt className="statement-end-if-in-editor"></bdt> and technical security measures. </em>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">We have implemented appropriate and reasonable technical and <bdt className="block-component"></bdt>organizational <bdt className="statement-end-if-in-editor"></bdt> security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be &quot;100%&quot; secure, so we cannot promise or guarantee that hackers, cybercriminals, or other <bdt className="block-component"></bdt>unauthorized <bdt className="statement-end-if-in-editor"></bdt> third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment. <span style={{color: 'rgb(89, 89, 89)'}}>
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                              </span>
                                                              <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                                <span data-custom-classname="body_text">
                                                                  <bdt className="block-component"></bdt>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div id="infominors" style={{lineHeight: 1.5}}>
                                                        <span style={{color: 'rgb(127, 127, 127)'}}>
                                                          <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                <span id="control" style={{color: 'rgb(0, 0, 0)'}}>
                                                                  <strong>
                                                                    <span data-custom-classname="heading_1">6. DO WE COLLECT INFORMATION FROM MINORS?</span>
                                                                  </strong>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">
                                                              <strong>
                                                                <em>In Short:</em>
                                                              </strong>
                                                              <em>&nbsp;We do not knowingly collect data from or market to <bdt className="block-component"></bdt>children under 18 years of age <bdt className="else-block"></bdt>. </em>
                                                              <bdt className="block-component"></bdt>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                                <span data-custom-classname="body_text">
                                                                  <bdt className="block-component"></bdt>
                                                                  <bdt className="question">admin@highplainsmedia.com</bdt>
                                                                  <bdt className="else-block"></bdt>
                                                                </span>
                                                              </span>. </span>
                                                            <span data-custom-classname="body_text">
                                                              <bdt className="else-block">
                                                                <bdt className="block-component"></bdt>
                                                              </bdt>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div id="privacyrights" style={{lineHeight: 1.5}}>
                                                        <span style={{color: 'rgb(127, 127, 127)'}}>
                                                          <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                <span id="control" style={{color: 'rgb(0, 0, 0)'}}>
                                                                  <strong>
                                                                    <span data-custom-classname="heading_1">7. WHAT ARE YOUR PRIVACY RIGHTS?</span>
                                                                  </strong>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">
                                                              <strong>
                                                                <em>In Short:</em>
                                                              </strong>
                                                              <em>&nbsp; <span style={{color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px'}}>
                                                                    <span data-custom-classname="body_text">
                                                                      <em>
                                                                        <bdt className="block-component"></bdt>
                                                                      </em>
                                                                    </span>
                                                                  </span>&nbsp; </span>You may review, change, or terminate your account at any time. </em>
                                                              <span style={{color: 'rgb(89, 89, 89)'}}>
                                                                <span style={{fontSize: '15px'}}>
                                                                  <bdt className="block-component">
                                                                    <bdt className="block-component"></bdt>
                                                                  </bdt>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div id="withdrawconsent" style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">
                                                              <strong>
                                                                <u>Withdrawing your consent:</u>
                                                              </strong> If we are relying on your consent to process your personal information, <bdt className="block-component"></bdt> which may be express and/or implied consent depending on the applicable law, <bdt className="statement-end-if-in-editor"></bdt> you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <bdt className="block-component"></bdt>&quot; <bdt className="statement-end-if-in-editor"></bdt>
                                                            </span>
                                                          </span>
                                                        </span>
                                                        <a data-custom-classname="link" href="#contact">
                                                          <span style={{fontSize: '15px', color: 'rgb(0, 58, 250)'}}>
                                                            <span style={{fontSize: '15px', color: 'rgb(0, 58, 250)'}}>
                                                              <span data-custom-classname="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span>
                                                            </span>
                                                          </span>
                                                        </a>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">
                                                              <bdt className="block-component"></bdt>&quot; <bdt className="statement-end-if-in-editor"></bdt> below <bdt className="block-component"></bdt>.
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px'}}>
                                                          <span data-custom-classname="body_text">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, <bdt className="block-component"></bdt> when applicable law allows, <bdt className="statement-end-if-in-editor"></bdt> will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent. <bdt className="block-component"></bdt>
                                                          </span>
                                                        </span>
                                                        <bdt className="block-component">
                                                          <span style={{fontSize: '15px'}}>
                                                            <span data-custom-classname="body_text"></span>
                                                          </span>
                                                        </bdt>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">
                                                              <span style={{fontSize: '15px'}}>
                                                                <span style={{color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px'}}>
                                                                    <span style={{color: 'rgb(89, 89, 89)'}}>
                                                                      <span data-custom-classname="body_text">
                                                                        <span style={{fontSize: '15px'}}>
                                                                          <span style={{color: 'rgb(89, 89, 89)'}}>
                                                                            <bdt className="block-component"></bdt>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                        <bdt className="block-component">
                                                          <span style={{fontSize: '15px'}}>
                                                            <span data-custom-classname="body_text"></span>
                                                          </span>
                                                        </bdt>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span data-custom-classname="body_text">
                                                          <span style={{fontSize: '15px'}}>If you have questions or comments about your privacy rights, you may email us at <bdt className="question">privacy@highplainsmedia.com</bdt>. </span>
                                                        </span>
                                                        <bdt className="statement-end-if-in-editor">
                                                          <span style={{fontSize: '15px'}}>
                                                            <span data-custom-classname="body_text"></span>
                                                          </span>
                                                        </bdt>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div id="DNT" style={{lineHeight: 1.5}}>
                                                        <span style={{color: 'rgb(127, 127, 127)'}}>
                                                          <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                <span id="control" style={{color: 'rgb(0, 0, 0)'}}>
                                                                  <strong>
                                                                    <span data-custom-classname="heading_1">8. CONTROLS FOR DO-NOT-TRACK FEATURES</span>
                                                                  </strong>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ( <bdt className="block-component"></bdt>&quot;DNT&quot; <bdt className="statement-end-if-in-editor"></bdt>) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for <bdt className="block-component"></bdt>recognizing <bdt className="statement-end-if-in-editor"></bdt> and implementing DNT signals has been <bdt className="block-component"></bdt>finalized <bdt className="statement-end-if-in-editor"></bdt>. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice. <bdt className="block-component"></bdt>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div id="uslaws" style={{lineHeight: 1.5}}>
                                                        <span style={{color: 'rgb(127, 127, 127)'}}>
                                                          <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                            <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                <span id="control" style={{color: 'rgb(0, 0, 0)'}}>
                                                                  <strong>
                                                                    <span data-custom-classname="heading_1">9. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span>
                                                                  </strong>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">
                                                              <strong>
                                                                <em>In Short:&nbsp;</em>
                                                              </strong>
                                                              <em>If you are a resident of <bdt className="forloop-component"></bdt>
                                                                <bdt className="block-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="forloop-component"></bdt> Colorado <bdt className="forloop-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="block-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="block-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>, California <bdt className="forloop-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="block-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="forloop-component">, Connecticut</bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="block-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="forloop-component">, Utah</bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="block-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="forloop-component"></bdt>
                                                                <bdt className="forloop-component"></bdt> or Virginia <bdt className="forloop-component"></bdt>
                                                                <bdt className="else-block"></bdt>
                                                                <bdt className="forloop-component"></bdt>, you are granted specific rights regarding access to your personal information.
                                                              </em>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">
                                                              <strong>What categories of personal information do we collect?</strong>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                          <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                            <span data-custom-classname="body_text">We have collected the following categories of personal information in the past twelve (12) months:</span>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <br />
                                                      </div>
                                                      <table style={{width: '100%'}}>
                                                        <tbody>
                                                          <tr>
                                                            <td style={{width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span data-custom-classname="body_text">
                                                                    <strong>Category</strong>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </td>
                                                            <td style={{width: '51.4385%', borderTop: '1px solid black', borderRight: '1px solid black'}}>
                                                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span data-custom-classname="body_text">
                                                                    <strong>Examples</strong>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </td>
                                                            <td style={{width: '14.9084%', borderRight: '1px solid black', borderTop: '1px solid black', 'textAlign': 'center'}}>
                                                              <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span data-custom-classname="body_text">
                                                                    <strong>Collected</strong>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td style={{width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">A. Identifiers</span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '51.4385%', borderTop: '1px solid black', borderRight: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '14.9084%', 'textAlign': 'center', verticalAlign: 'middle', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">
                                                                      <bdt className="block-component">
                                                                        <bdt className="block-component"></bdt>
                                                                      </bdt>YES <bdt className="else-block">
                                                                        <bdt className="block-component"></bdt>
                                                                      </bdt>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <bdt className="block-component"></bdt>
                                                      </div>
                                                      <table style={{width: '100%'}}>
                                                        <tbody>
                                                          <tr>
                                                            <td style={{width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">B. Personal information as defined in the California Customer Records statute</span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">Name, contact information, education, employment, employment history, and financial information</span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '14.9084%', 'textAlign': 'center', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">
                                                                      <bdt className="forloop-component">
                                                                        <bdt className="block-component">
                                                                          <bdt className="block-component"></bdt>YES <bdt className="block-component"></bdt>
                                                                        </bdt>
                                                                      </bdt>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                      <div style={{lineHeight: 1.5}}>
                                                        <bdt className="block-component"></bdt>
                                                      </div>
                                                      <table style={{width: '100%'}}>
                                                        <tbody>
                                                          <tr>
                                                            <td style={{width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">
                                                                      <bdt className="block-component"></bdt>C <bdt className="else-block"></bdt>. Protected classification characteristics under state or federal law
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">Gender and date of birth</span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '14.9084%', 'textAlign': 'center', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                              <div data-custom-classname="body_text" style={{lineHeight: 1.5}}>
                                                                <bdt className="forloop-component">
                                                                  <span data-custom-classname="body_text">
                                                                    <bdt className="block-component"></bdt>
                                                                    <bdt className="block-component"></bdt>YES <bdt className="else-block"></bdt>
                                                                    <bdt className="block-component"></bdt>
                                                                  </span>
                                                                </bdt>
                                                              </div>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td style={{width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">
                                                                      <bdt className="block-component"></bdt>D <bdt className="else-block"></bdt>. Commercial information
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">Transaction information, purchase history, financial details, and payment information</span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '14.9084%', 'textAlign': 'center', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                              <div data-custom-classname="body_text" style={{lineHeight: 1.5}}>
                                                                <bdt className="forloop-component">
                                                                  <span data-custom-classname="body_text">
                                                                    <bdt className="block-component"></bdt>
                                                                    <bdt className="block-component"></bdt>NO <bdt className="statement-end-if-in-editor">
                                                                      <bdt className="block-component"></bdt>
                                                                    </bdt>
                                                                  </span>
                                                                </bdt>
                                                              </div>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td style={{width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">
                                                                      <bdt className="block-component"></bdt>E <bdt className="else-block"></bdt>. Biometric information
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">Fingerprints and voiceprints</span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '14.9084%', 'textAlign': 'center', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                              <div data-custom-classname="body_text" style={{lineHeight: 1.5}}>
                                                                <bdt className="forloop-component">
                                                                  <span data-custom-classname="body_text">
                                                                    <bdt className="block-component">
                                                                      <bdt className="block-component">NO</bdt>
                                                                      <bdt className="statement-end-if-in-editor"></bdt>
                                                                      <bdt className="block-component"></bdt>
                                                                    </bdt>
                                                                  </span>
                                                                </bdt>
                                                              </div>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td style={{width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text"><bdt className="block-component"></bdt>F<bdt className="else-block"></bdt>. Internet or other similar network activity </span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                  <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                                    <span data-custom-classname="body_text">Browsing history, search history, online <bdt className="block-component"></bdt>behavior<bdt className="statement-end-if-in-editor"></bdt>, interest data, and interactions with our and other websites, applications, systems, and advertisements </span>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '14.9084%', 'textAlign': 'center', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                              <div data-custom-classname="body_text" style={{lineHeight: 1.5}}>
                                                                <bdt className="forloop-component">
                                                                  <span data-custom-classname="body_text"><bdt className="block-component"></bdt><bdt className="block-component"></bdt>NO<bdt className="statement-end-if-in-editor"></bdt><bdt className="block-component"></bdt>
                                                                  </span>
                                                                </bdt>
                                                              </div>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td style={{width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt>G<bdt className="else-block"></bdt>. Geolocation data</span></span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">Device location</span></span>
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td style={{width: '14.9084%', 'textAlign': 'center', borderRight: '1px solid black', borderTop: '1px solid black'}}>
                                                              <div style={{lineHeight: 1.5}}>
                                                                <br />
                                                              </div>
                                                              <div data-custom-classname="body_text" style={{lineHeight: 1.5}}><bdt className="forloop-component"><span data-custom-classname="body_text"><bdt className="block-component"></bdt><bdt className="block-component"></bdt>NO<bdt className="statement-end-if-in-editor"></bdt><bdt className="block-component"></bdt></span></bdt>
                                                              </div>
                                                              <div style={{lineHeight: 1.5}}><br /></div>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td style={{width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black'}}><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt>H<bdt className="else-block"></bdt>. Audio, electronic, visual, thermal, olfactory, or similar information</span></span></span></div>
                                                            </td>
                                                            <td style={{width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black'}}><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">Images and audio, video or call recordings created in connection with our business activities</span></span></span></div>
                                                            </td>
                                                            <td style={{width: '14.9084%', 'textAlign': 'center', borderRight: '1px solid black', borderTop: '1px solid black'}}><div style={{lineHeight: 1.5}}><br /></div><div data-custom-classname="body_text" style={{lineHeight: 1.5}}><bdt className="forloop-component"><span data-custom-classname="body_text"><bdt className="block-component"></bdt><bdt className="block-component"></bdt>NO<bdt className="statement-end-if-in-editor"></bdt><bdt className="block-component"></bdt></span></bdt></div><div style={{lineHeight: 1.5}}><br /></div></td>
                                                          </tr><tr><td style={{width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black'}}><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt>I<bdt className="else-block"></bdt>. Professional or employment-related information</span></span></span></div></td><td style={{width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black'}}><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</span></span></span></div></td><td style={{width: '14.9084%', 'textAlign': 'center', borderRight: '1px solid black', borderTop: '1px solid black'}}><div style={{lineHeight: 1.5}}><br /></div><div data-custom-classname="body_text" style={{lineHeight: 1.5}}><bdt className="forloop-component"><span data-custom-classname="body_text"><bdt className="block-component"></bdt><bdt className="block-component"></bdt>NO<bdt className="statement-end-if-in-editor"></bdt><bdt className="block-component"></bdt></span></bdt></div><div style={{lineHeight: 1.5}}><br /></div></td></tr><tr><td style={{borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black', width: '33.8274%'}}><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt>J<bdt className="else-block"></bdt>. Education Information</span></span></span></div></td><td style={{borderRight: '1px solid black', borderTop: '1px solid black', width: '51.4385%'}}><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">Student records and directory information</span></span></span></div></td><td style={{'textAlign': 'center', borderRight: '1px solid black', borderTop: '1px solid black', width: '14.9084%'}}><div style={{lineHeight: 1.5}}><br /></div><div data-custom-classname="body_text" style={{lineHeight: 1.5}}><bdt className="forloop-component"><span data-custom-classname="body_text"><bdt className="block-component"></bdt><bdt className="block-component"></bdt>NO<bdt className="statement-end-if-in-editor"></bdt><bdt className="block-component"></bdt></span></bdt></div><div style={{lineHeight: 1.5}}><br /></div></td></tr><tr><td style={{borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', width: '33.8274%'}}><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt>K<bdt className="else-block"></bdt>. Inferences drawn from collected personal information</span></span></span></div></td><td style={{borderBottom: '1px solid black', borderTop: '1px solid black', borderRight: '1px solid black', width: '51.4385%'}}><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</span></span></span></div></td><td style={{'textAlign': 'center', borderRight: '1px solid black', borderBottom: '1px solid black', borderTop: '1px solid black', width: '14.9084%'}}><div style={{lineHeight: 1.5}}><br /></div><div data-custom-classname="body_text" style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt>NO<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div></td></tr><tr><td style={{borderLeft: '1px solid black', borderRight: '1px solid black', borderBottom: '1px solid black', lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt>L<bdt className="else-block"></bdt>. Sensitive personal Information</span></td><td style={{borderRight: '1px solid black', borderBottom: '1px solid black', lineHeight: 1.5}}><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt></td><td style={{borderRight: '1px solid black', borderBottom: '1px solid black'}}><div data-empty="true" style={{'textAlign': 'center'}}><br /></div><div data-custom-classname="body_text" data-empty="true" style={{'textAlign': 'center', lineHeight: 1.5}}><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt>NO<bdt className="statement-end-if-in-editor"><span data-custom-classname="body_text"></span></bdt></div><div data-empty="true" style={{'textAlign': 'center'}}><br /></div></td></tr>
                                                        </tbody>
                                                      </table>
                                                      <div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt><span data-custom-classname="body_text">We will use and retain the collected personal information as needed to provide the Services or for:<bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span data-custom-classname="body_text">Category A - <bdt className="question">6 months</bdt><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span data-custom-classname="body_text">Category B - <bdt className="question">6 months</bdt><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span data-custom-classname="body_text">Category <bdt className="block-component"></bdt>C<bdt className="else-block"></bdt> - <bdt className="question">6 months</bdt><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span><bdt className="statement-end-if-in-editor"><span data-custom-classname="body_text"></span></bdt><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">Receiving help through our customer support channels;</span><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px'}}><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">Participation in customer surveys or contests; and</span><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px'}}><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">Facilitation in the delivery of our Services and to respond to your inquiries.</span><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px'}}><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><strong>How do we use and share your personal information?</strong></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text" style={{fontSize: '15px'}}>Learn about how we use your personal information in the section, <bdt className="block-component"></bdt>&quot;<bdt className="statement-end-if-in-editor"></bdt></span><a data-custom-classname="link" href="#infouse"><span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}>HOW DO WE PROCESS YOUR INFORMATION?</span></a><span data-custom-classname="body_text" style={{fontSize: '15px'}}><bdt className="block-component"></bdt>&quot;</span><bdt className="statement-end-if-in-editor"><span data-custom-classname="body_text" style={{fontSize: '15px'}}></span></bdt></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><strong>Will your information be shared with anyone else?</strong></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, <bdt className="block-component"></bdt>&quot;<bdt className="statement-end-if-in-editor"></bdt></span></span></span><a data-custom-classname="link" href="#whoshare"><span style={{fontSize: '15px', color: 'rgb(0, 58, 250)'}}><span style={{fontSize: '15px', color: 'rgb(0, 58, 250)'}}>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></span></a><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="block-component">

                                                      </bdt>&quot;<bdt className="statement-end-if-in-editor"></bdt></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                      <span data-custom-classname="body_text">We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be <bdt className="block-component"></bdt>&quot;selling&quot;<bdt className="statement-end-if-in-editor"></bdt> of your personal information.<span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                      <span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We<span style={{color: 'rgb(89, 89, 89)'}}>&nbsp;</span>will not sell or share personal information in the future belonging to website visitors, users, and other consumers.<span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span><bdt className="block-component"></bdt></span></span></span></span></span><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span><bdt className="block-component"></bdt></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><strong><span data-custom-classname="heading_2" style={{fontSize: '15px'}}>California Residents</span></strong></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text" style={{fontSize: '15px'}}>California Civil Code Section 1798.83, also known as the <bdt className="block-component"></bdt>&quot;Shine The Light&quot;<bdt className="statement-end-if-in-editor"></bdt> law permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><br /></span></span></div><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text" style={{fontSize: '15px'}}>If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g.<bdt className="block-component"></bdt>,<bdt className="statement-end-if-in-editor"></bdt> backups, etc.).</span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><strong><u>CCPA Privacy Notice</u></strong></span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><br /></span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">This section applies only to California residents. Under the California Consumer Privacy Act (CCPA), you have the rights listed below.</span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><br /></span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">The California Code of Regulations defines a <bdt className="block-component"></bdt>&quot;residents&quot;<bdt className="statement-end-if-in-editor"></bdt> as:</span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><br /></span></span></div><div style={{marginLeft: '20px', lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">(1) every individual who is in the State of California for other than a temporary or transitory purpose and</span></span></div><div style={{marginLeft: '20px', lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><br /></span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">All other individuals are defined as <bdt className="block-component"></bdt>&quot;non-residents.&quot;<bdt className="statement-end-if-in-editor"></bdt></span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><br /></span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">If this definition of <bdt className="block-component"></bdt>&quot;resident&quot;<bdt className="statement-end-if-in-editor"></bdt> applies to you, we must adhere to certain rights and obligations regarding your personal information.</span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><strong>Your rights with respect to your personal data</strong></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><u>Right to request deletion of the data — Request to delete</u></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><u>Right to be informed — Request to know</u></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">Depending on the circumstances, you have a right to know:<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">whether we collect and use your personal information;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">the categories of personal information that we collect;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span>
                                                      </span></span></span></span></span></span></span></li></ul><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                      <span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">
                                                      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt>
                                                      </span></span></span></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                      <span data-custom-classname="body_text">the purposes for which the collected personal information is used;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}>
                                                      <span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                      <span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component">
                                                      </bdt></span></span></span></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">whether we sell or share personal information to third parties;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt>
                                                      </span></span></span></span></span></span></span></span></span></li></ul><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                      <span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">the categories of personal information that we sold, shared, or disclosed for a business purpose;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}>
                                                      <span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                      <span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">
                                                      <span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text">
                                                      <bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">the business or commercial purpose for collecting, selling, or sharing personal information; and<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span>
                                                      </span></span></span></span></li></ul><div style={{lineHeight: 1.5}}><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt></div><ul><li style={{lineHeight: 1.5}}><span data-custom-classname="body_text">the specific pieces of personal information we collected about you.<bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                      <span data-custom-classname="body_text"><u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">We will not discriminate against you if you exercise your privacy rights.</span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><u><span data-custom-classname="body_text">Right to Limit Use and Disclosure of Sensitive Personal Information</span></u></span></div><div style={{lineHeight: 1.5}}><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt></div>
                                                      <div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span data-custom-classname="body_text">We do not process consumer&lsquo;s sensitive personal information.</span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><bdt className="statement-end-if-in-editor"><span data-custom-classname="body_text"></span></bdt></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><u>Verification process</u></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g.<bdt className="block-component"></bdt>,<bdt className="statement-end-if-in-editor"></bdt> phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}>
                                                      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><u>Other privacy rights</u></span></span></span></div><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">You may object to the processing of your personal information.<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">
                                                      <span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">
                                                      <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span>
                                                      </span></span></span></span></span></span></li></ul><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">You can designate an <bdt className="block-component"></bdt>authorized<bdt className="statement-end-if-in-editor"></bdt> agent to make a request under the CCPA on your behalf. We may deny a request from an <bdt className="block-component">
                                                      </bdt>authorized<bdt className="statement-end-if-in-editor"></bdt> agent that does not submit proof that they have been validly <bdt className="block-component"></bdt>authorized<bdt className="statement-end-if-in-editor"></bdt> to act on your behalf in accordance with the CCPA.<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                      <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">You may request to opt out from future selling or sharing of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">
                                                      <bdt className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div style={{lineHeight: 1.5}}><bdt className="block-component"><span style={{fontSize: '15px'}}></span></bdt><div style={{lineHeight: 1.5}}><bdt className="block-component"><span style={{fontSize: '15px'}}></span></bdt></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">To exercise these rights, you can contact us <bdt className="block-component"></bdt>by submitting a&nbsp;</span></span></span><a data-custom-classname="link" href="https://app.termly.io/notify/a91cd01a-57aa-4551-a766-70ae6a132c07" rel="noopener noreferrer" target="_blank"><span style={{fontSize: '15px', color: 'rgb(0, 58, 250)'}}><span style={{fontSize: '15px', color: 'rgb(0, 58, 250)'}}>data subject access request</span></span></a><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">, <bdt className="block-component"></bdt></span>
                                                      <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt>by email at <bdt className="question">admin@highplainsmedia.com</bdt>, <bdt className="statement-end-if-in-editor"></bdt><bdt className="block-component"></bdt></span><span data-custom-classname="body_text"><bdt className="block-component"></bdt><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt></span></span></span></span></span></span><span data-custom-classname="body_text">or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</span><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}>
                                                      <span data-custom-classname="body_text"><bdt className="block-component"><bdt className="block-component"></bdt></bdt></span></span></div><div style={{lineHeight: 1.5}}><bdt className="block-component"><span style={{fontSize: '15px'}}></span></bdt></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><strong><span data-custom-classname="heading_2">Colorado Residents</span></strong></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">This section applies only to Colorado residents. Under the Colorado Privacy Act (CPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.</span><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to be informed whether or not we are processing your personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul>
                                                      <div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to access your personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><bdt className="block-component"></bdt></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to correct inaccuracies in your personal data</span></span><bdt className="statement-end-if-in-editor"></bdt></li></ul><div style={{lineHeight: 1.5}}><bdt className="block-component"></bdt></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to request deletion of your personal data</span></span><bdt className="statement-end-if-in-editor"></bdt></li></ul><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to obtain a copy of the personal data you previously shared with us</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><bdt className="block-component"></bdt></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (<bdt className="block-component"></bdt>&quot;profiling&quot;<bdt className="statement-end-if-in-editor"></bdt>)
                                                      </span></span><bdt className="statement-end-if-in-editor"></bdt></li></ul><div data-custom-classname="body_text" style={{lineHeight: 1.5}}><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt><span style={{fontSize: '15px'}}>To submit a request to exercise</span><bdt className="block-component" style={{fontSize: '15px'}}></bdt><span style={{fontSize: '15px'}}>these</span><bdt className="statement-end-if-in-editor" style={{fontSize: '15px'}}></bdt><span style={{fontSize: '15px'}}>rights described above, please <bdt className="block-component"></bdt>email</span><bdt className="question" style={{fontSize: '15px'}}>privacy@highplainsmedia.com</bdt><span style={{fontSize: '15px'}}>&nbsp;or</span><bdt className="block-component" style={{fontSize: '15px'}}></bdt><span style={{fontSize: '15px'}}>submit a&nbsp;</span>
                                                      <a data-custom-classname="link" href="https://app.termly.io/notify/a91cd01a-57aa-4551-a766-70ae6a132c07" rel="noopener noreferrer" target="_blank"><span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}><span data-custom-classname="link">data subject access request</span></span></a><bdt className="block-component" style={{fontSize: '15px'}}></bdt><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">.</span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">If we decline to take action regarding your request and you wish to appeal our decision, please email us at <bdt className="block-component"></bdt><bdt className="question">privacy@highplainsmedia.com</bdt><bdt className="else-block"></bdt>. Within forty-five (45) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions.</span><bdt className="statement-end-if-in-editor"></bdt></span></div>
                                                      <div style={{lineHeight: 1.5}}><bdt className="block-component"></bdt></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><strong><span style={{fontSize: '15px'}}><span data-custom-classname="heading_2">Connecticut Residents</span></span></strong></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">This section applies only to Connecticut residents. Under the Connecticut Data Privacy Act (CTDPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.</span><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to be informed whether or not we are processing your personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><bdt className="block-component">
                                                      </bdt></div><ul><li style={{lineHeight: 1.5}}><span data-custom-classname="body_text">Right to access your personal data</span><bdt className="statement-end-if-in-editor"></bdt></li></ul><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to correct inaccuracies in your personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><bdt className="block-component"></bdt></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to request deletion of your personal data</span></span><bdt className="statement-end-if-in-editor"></bdt></li></ul><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to obtain a copy of the personal data you previously shared with us</span>
                                                      <bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><bdt className="block-component"></bdt></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (<bdt className="block-component"></bdt>&quot;profiling&quot;<bdt className="statement-end-if-in-editor"></bdt>)</span></span><bdt className="statement-end-if-in-editor"></bdt></li></ul><div data-custom-classname="body_text" style={{lineHeight: 1.5}}><bdt className="block-component"><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"></span></span></bdt>To submit a request to exercise <bdt className="block-component"></bdt>these<bdt className="statement-end-if-in-editor"></bdt> rights described above, please <bdt className="block-component"></bdt>email <bdt className="question">privacy@highplainsmedia.com</bdt> or <bdt className="block-component"></bdt>submit a <a data-custom-classname="link" href="https://app.termly.io/notify/a91cd01a-57aa-4551-a766-70ae6a132c07" rel="noopener noreferrer" target="_blank"><span style={{color: 'rgb(0, 58, 250)'}}>
                                                      <span data-custom-classname="link">data subject access request</span></span></a><bdt className="block-component"></bdt>.</div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">If we decline to take action regarding your request and you wish to appeal our decision, please email us at <bdt className="block-component"></bdt><bdt className="question">privacy@highplainsmedia.com</bdt><bdt className="else-block"></bdt>. Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions.</span></span><bdt className="statement-end-if-in-editor"></bdt><bdt className="block-component"><span style={{fontSize: '15px'}}></span></bdt></div><div style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><strong><span data-custom-classname="heading_2">Utah Residents</span></strong></span></div><div style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">This section applies only to Utah residents. Under the Utah Consumer Privacy Act (UCPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.</span><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to be informed whether or not we are processing your personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to access your personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.4}}>
                                                      <span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to request deletion of your personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to obtain a copy of the personal data you previously shared with us</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising or the sale of personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div data-custom-classname="body_text" style={{lineHeight: 1.4}}><span style={{fontSize: '15px'}}><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt>To submit a request to exercise <bdt className="block-component"></bdt>these<bdt className="statement-end-if-in-editor"></bdt> rights described above, please <bdt className="block-component"></bdt>email <bdt className="question">privacy@highplainsmedia.com</bdt> or <bdt className="block-component"></bdt>submit a <a data-custom-classname="link" href="https://app.termly.io/notify/a91cd01a-57aa-4551-a766-70ae6a132c07" rel="noopener noreferrer" target="_blank"><span style={{color: 'rgb(0, 58, 250)'}}>data subject access request</span></a><bdt className="block-component"></bdt>.</span><bdt className="statement-end-if-in-editor"><span style={{fontSize: '15px'}}></span></bdt><bdt className="block-component"><span style={{fontSize: '15px'}}></span></bdt></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><strong><span data-custom-classname="heading_2">Virginia Residents</span></strong></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Under the Virginia Consumer Data Protection Act (VCDPA):</span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div data-custom-classname="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt>&quot;Consumer&quot;<bdt className="statement-end-if-in-editor"></bdt> means a natural person who is a resident of the Commonwealth acting only in an individual or household context. It does not include a natural person acting in a commercial or employment context.</span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div data-custom-classname="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt>&quot;Personal data&quot;<bdt className="statement-end-if-in-editor"></bdt> means any information that is linked or reasonably linkable to an identified or identifiable natural person. <bdt className="block-component"></bdt>&quot;Personal data&quot;<bdt className="statement-end-if-in-editor"></bdt> does not include de-identified data or publicly available information.</span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div data-custom-classname="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt>&quot;Sale of personal data&quot;<bdt className="statement-end-if-in-editor"></bdt> means the exchange of personal data for monetary consideration.</span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">If this definition of <bdt className="block-component"></bdt>&quot;consumer&quot;<bdt className="statement-end-if-in-editor"></bdt> applies to you, we must adhere to certain rights and obligations regarding your personal data.</span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><u>Your rights with respect to your personal data</u></span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to be informed whether or not we are processing your personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to access your personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to correct inaccuracies in your personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to request deletion of your personal data</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to obtain a copy of the personal data you previously shared with us</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><ul><li style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (<bdt className="block-component"></bdt>&quot;profiling&quot;<bdt className="statement-end-if-in-editor"></bdt>)</span><bdt className="statement-end-if-in-editor"></bdt></span></li></ul><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><u><span data-custom-classname="body_text">Exercise your rights provided under the Virginia VCDPA</span></u></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><bdt className="block-component"></bdt><span data-custom-classname="body_text">You may <bdt className="block-component"></bdt>contact us by email at <bdt className="question">privacy@highplainsmedia.com</bdt> or <bdt className="block-component"></bdt>submit a <a data-custom-classname="link" href="https://app.termly.io/notify/a91cd01a-57aa-4551-a766-70ae6a132c07" rel="noopener noreferrer" target="_blank"><span style={{color: 'rgb(0, 58, 250)'}}><span data-custom-classname="link">data subject access request</span></span></a><bdt className="block-component"></bdt>.</span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">If you are using an <bdt className="block-component"></bdt>authorized<bdt className="statement-end-if-in-editor"></bdt> agent to exercise your rights, we may deny a request if the <bdt className="block-component"></bdt>authorized<bdt className="statement-end-if-in-editor"></bdt> agent does not submit proof that they have been validly <bdt className="block-component"></bdt>authorized<bdt className="statement-end-if-in-editor"></bdt> to act on your behalf.</span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><u><span data-custom-classname="body_text">Verification process</span></u><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">We may request that you provide additional information reasonably necessary to verify you and your consumers request. If you submit the request through an <bdt className="block-component"></bdt>authorized<bdt className="statement-end-if-in-editor"></bdt> agent, we may need to collect additional information to verify your identity before processing your request.</span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text">Upon receiving your request, we will respond without undue delay, but in all cases, within forty-five (45) days of receipt. The response period may be extended once by forty-five (45) additional days when reasonably necessary. We will inform you of any such extension within the initial 45-day response period, together with the reason for the extension.</span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><span data-custom-classname="body_text"><u>Right to appeal</u></span></span></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{lineHeight: 1.5}}>
                                                      <span style={{fontSize: '15px'}}><span data-custom-classname="body_text">If we decline to take action regarding your request, we will inform you of our decision and reasoning behind it. If you wish to appeal our decision, please email us at <bdt className="block-component"></bdt><bdt className="question">privacy@highplainsmedia.com</bdt><bdt className="else-block"></bdt>. Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may contact the <a data-custom-classname="link" href="https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint" rel="noopener noreferrer" target="_blank"><span style={{color: 'rgb(0, 58, 250)'}}><span data-custom-classname="link">Attorney General to submit a complaint</span></span></a>.</span></span><bdt className="statement-end-if-in-editor"></bdt><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"><span data-custom-classname="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="statement-end-if-in-editor"><bdt className="statement-end-if-in-editor"></bdt></bdt></span></span></span></span></span></span></span></span></span></span></span></bdt></span></span></span></span></span></span></span></span></span></span><bdt className="block-component"><span style={{fontSize: '15px'}}></span></bdt><bdt className="block-component"><span style={{fontSize: '15px'}}></span></bdt></div><div style={{lineHeight: 1.5}}><br /></div><div id="policyupdates" style={{lineHeight: 1.5}}><span style={{color: 'rgb(127, 127, 127)'}}><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span id="control" style={{color: 'rgb(0, 0, 0)'}}><strong><span data-custom-classname="heading_1">10. DO WE MAKE UPDATES TO THIS NOTICE?</span></strong></span></span></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><em><strong>In Short:&nbsp;</strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">We may update this privacy notice from time to time. The updated version will be indicated by an updated <bdt className="block-component"></bdt>&quot;Revised&quot;<bdt className="statement-end-if-in-editor"></bdt> date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div id="contact" style={{lineHeight: 1.5}}><span style={{color: 'rgb(127, 127, 127)'}}><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span id="control" style={{color: 'rgb(0, 0, 0)'}}><strong><span data-custom-classname="heading_1">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></strong></span></span></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text">If you have questions or comments about this notice, you may <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-classname="body_text"><bdt className="block-component"><bdt className="block-component"></bdt></bdt>email us at <bdt className="question">admin@highplainsmedia.com&nbsp;</bdt><bdt className="statement-end-if-in-editor"><bdt className="block-component"></bdt></bdt></span></span><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}>
                                                      </span></span></span></span></span></div><div style={{lineHeight: 1.5}}><br /></div><div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><span style={{fontSize: '15px'}}><span style={{color: 'rgb(89, 89, 89)'}}><span style={{color: 'rgb(89, 89, 89)'}}>
                                                        </span></span></span></span><span data-custom-classname="body_text"><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt></span></span></span></span></span></div>
                                                        
                                                        
                                                        <div id="request" style={{lineHeight: 1.5}}><span style={{color: 'rgb(127, 127, 127)'}}>
                                                            <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span id="control" style={{color: 'rgb(0, 0, 0)'}}><strong><span data-custom-classname="heading_1">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></strong></span></span></span></span></span></div>
                                                            <div style={{lineHeight: 1.5}}><br /></div>
                                                            <div style={{lineHeight: 1.5}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-classname="body_text"><bdt className="block-component"></bdt>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. <bdt className="else-block"><bdt className="block-component"></bdt>To request to review, update, or delete your personal information, please <bdt className="block-component"></bdt>fill out and submit a&nbsp;</bdt></span><span style={{color: 'rgb(0, 58, 250)'}}><span data-custom-classname="body_text"><span style={{color: 'rgb(0, 58, 250)', fontSize: '15px'}}>
                                                            <a data-custom-classname="link" href="https://app.termly.io/notify/a91cd01a-57aa-4551-a766-70ae6a132c07" rel="noopener noreferrer" target="_blank">data subject access request</a></span></span></span><bdt className="block-component"><span data-custom-classname="body_text"></span></bdt></span></span><span data-custom-classname="body_text">.</span></div>
                                                        </div>
                                                        </div></div></div></div></div></div></div></div></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Body>
                </SectionContentCentered>
            </Section>
        </>
    )
};

export default Privacy;