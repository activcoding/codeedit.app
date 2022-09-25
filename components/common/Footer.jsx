import Link from 'next/link';
import React from 'react';
import styled from 'styled-components'
import ColorSchemeToggle from './ColorSchemeToggle';

const FooterWrap = styled.footer`
  font-size: 12px;
  line-height: 1.33337;
  font-weight: 400;
  letter-spacing: -.01em;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  min-width: 1024px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: var(--background-tertiary-color);
  color: var(--label-tertiary-color);
  box-sizing: content-box;
`

const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 980px;
  padding: 0 22px;
  padding-left: calc(max(22px, env(safe-area-inset-left)));
  padding-right: calc(max(22px, env(safe-area-inset-right)));
`

const FooterMini = styled.section`
  color: var(--glyph-gray-tertiary);
  padding-top: 34px;
  padding-bottom: calc(max(21px, env(safe-area-inset-bottom)));
  color: #86868b;
`
const MiniFooterTop = styled.div`
  margin-bottom: 7px;
  padding-bottom: 8px;
  border-bottom: 1px solid #d2d2d7;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  
  border-color: var(--separator-color);
  a {
    color: var(--glyph-blue);
    :hover {
      text-decoration: underline;
    }
  }
}
`
const LegalCopyright = styled.div`
`
const LegalLinks = styled.div`
  display: flex;
  a {
    border-right: 1px solid #d2d2d7;
    margin-right: 7px;
    padding-right: 10px;
    display: inline-block;
    margin-top: 5px;
    white-space: nowrap;

    color: var(--glyph-gray-secondary-alt);
    border-color: var(--fill-gray-tertiary);

    :last-child {
      border: 0;
      margin-right: 0;
      padding-right: 0;
    }
  }
`
const LegalLink = styled(Link)``

const MiniFooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    color: var(--glyph-gray-secondary-alt);
    :hover {
      text-decoration: underline;
    }
  }
`

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <FooterWrap
      id="footer"
      className="footer"
      role="contentinfo"
      aria-labelledby="footer-label"
    >
      <FooterContent>
        <FooterMini>
          <MiniFooterTop>
            <div>To view the latest CodeEdit developments, visit <a href="https://github.com/CodeEditApp/CodeEdit">our GitHub repo</a>.</div>
            <ColorSchemeToggle />
          </MiniFooterTop>
          <MiniFooterBottom>
            <LegalCopyright>
              Copyright &copy; {currentYear}{' '}
              <a href="https://codeedit.app">CodeEdit.</a> All rights reserved.
            </LegalCopyright>
            <LegalLinks>
              <LegalLink href="/legal/tos">
                Terms of Use
              </LegalLink>
              <LegalLink href="/legal/privacy">
                Privacy Policy
              </LegalLink>
              <LegalLink href="/legal/terms">
                Agreements and Open Source Licenses
              </LegalLink>
            </LegalLinks>
          </MiniFooterBottom>
        </FooterMini>
      </FooterContent>
    </FooterWrap>
  );
}

export default Footer;
