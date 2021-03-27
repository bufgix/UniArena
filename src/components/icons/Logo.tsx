import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgLogo(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 305 304"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M152.5 278.667S254.167 228 254.167 152V63.333l-101.667-38-101.667 38V152c0 76 101.667 126.667 101.667 126.667z"
        stroke="#fff"
        strokeWidth={15}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M135.947 118.236L128.184 126h-9.991v-7.764h4.805V87.123h12.949v31.113zm-24.58 0h4.776V126h-9.961l-7.793-7.764V87.123h12.978v31.113zm-6.885-41.484h9.844v6.475h-9.844v-6.475zm15.528 0h9.844v6.475h-9.844v-6.475zM179.863 126h-13.769l-23.555-38.877h13.682L179.863 126zm-37.324 0V90.814l11.279 18.487V126h-11.279zm37.324-38.877v35.186l-11.279-18.575V87.123h11.279zm6.27 30.586h3.896V95.385h-3.896v-8.262h20.742v8.262h-3.896v22.324h3.896V126h-20.742v-8.291zm5.508-40.957h9.843v6.475h-9.843v-6.475zm-118.74 120H60.185l2.695-7.705h7.031l-10.4-26.924h12.627L87.637 201H74.54l-1.64-4.248zM56.728 201h-12.51l13.886-37.119 5.743 15.439-7.12 21.68zm34.6 0v-38.877h12.948V201H91.328zm14.999-31.113v-7.764h14.795l7.793 7.764v11.66l-5.977 5.976-.41-.82-12.158 1.611.469 1.026h-4.512v-7.529h9.727v-11.924h-9.727zM130.234 201h-13.828l-5.566-11.66h10.283l1.816-1.817L130.234 201zm17.578-15.967V201h-12.949v-38.877h12.949v15.41h12.393v7.5h-12.393zm2.051-15.381v-7.529h20.244v11.25H157.92v-3.721h-8.057zm0 31.348v-7.764h7.295v-3.896h12.949V201h-20.244zm63.809 0h-13.77l-23.554-38.877h13.681L213.672 201zm-37.324 0v-35.186l11.279 18.487V201h-11.279zm37.324-38.877v35.186l-11.279-18.575v-16.611h11.279zm32.373 34.629H233.33l2.695-7.705h7.032l-10.401-26.924h12.627L260.781 201h-13.095l-1.641-4.248zM229.873 201h-12.51l13.887-37.119 5.742 15.439-7.119 21.68z"
        fill="#fff"
      />
      <Path
        d="M135.947 118.236l.707.707.293-.292v-.415h-1zM128.184 126v1h.414l.293-.293-.707-.707zm-9.991 0h-1v1h1v-1zm0-7.764v-1h-1v1h1zm4.805 0v1h1v-1h-1zm0-31.113v-1h-1v1h1zm12.949 0h1v-1h-1v1zm-24.58 31.113h-1v1h1v-1zm4.776 0h1v-1h-1v1zm0 7.764v1h1v-1h-1zm-9.961 0l-.706.708.293.292h.413v-1zm-7.793-7.764h-1v.416l.294.293.706-.709zm0-31.113v-1h-1v1h1zm12.978 0h1v-1h-1v1zm-6.885-10.371v-1h-1v1h1zm9.844 0h1v-1h-1v1zm0 6.475v1h1v-1h-1zm-9.844 0h-1v1h1v-1zm15.528-6.475v-1h-1v1h1zm9.844 0h1v-1h-1v1zm0 6.475v1h1v-1h-1zm-9.844 0h-1v1h1v-1zm15.23 34.302l-7.764 7.764 1.415 1.414 7.763-7.764-1.414-1.414zM128.184 125h-9.991v2h9.991v-2zm-8.991 1v-7.764h-2V126h2zm-1-6.764h4.805v-2h-4.805v2zm5.805-1V87.123h-2v31.113h2zm-1-30.113h12.949v-2h-12.949v2zm11.949-1v31.113h2V87.123h-2zm-23.58 32.113h4.776v-2h-4.776v2zm3.776-1V126h2v-7.764h-2zm1 6.764h-9.961v2h9.961v-2zm-9.256.292l-7.793-7.764-1.411 1.417 7.793 7.763 1.411-1.416zm-7.498-7.056V87.123h-2v31.113h2zm-1-30.113h12.978v-2H98.389v2zm11.978-1v31.113h2V87.123h-2zm-5.885-9.371h9.844v-2h-9.844v2zm8.844-1v6.475h2v-6.475h-2zm1 5.475h-9.844v2h9.844v-2zm-8.844 1v-6.475h-2v6.475h2zm14.528-5.475h9.844v-2h-9.844v2zm8.844-1v6.475h2v-6.475h-2zm1 5.475h-9.844v2h9.844v-2zm-8.844 1v-6.475h-2v6.475h2zM179.863 126v1h1.779l-.924-1.52-.855.52zm-13.769 0l-.856.518.292.482h.564v-1zm-23.555-38.877v-1h-1.775l.92 1.518.855-.518zm13.682 0l.854-.52-.292-.48h-.562v1zM142.539 126h-1v1h1v-1zm0-35.186l.854-.52-1.854-3.038v3.558h1zm11.279 18.487h1v-.281l-.146-.24-.854.521zm0 16.699v1h1v-1h-1zm26.045-38.877h1v-1h-1v1zm0 35.186l-.854.519 1.854 3.054v-3.573h-1zm-11.279-18.575h-1v.28l.145.239.855-.519zm0-16.611v-1h-1v1h1zM179.863 125h-13.769v2h13.769v-2zm-12.914.482l-23.555-38.877-1.71 1.036 23.554 38.877 1.711-1.036zm-24.41-37.359h13.682v-2h-13.682v2zm12.827-.48l23.643 38.877 1.709-1.04-23.643-38.877-1.709 1.04zM143.539 126V90.814h-2V126h2zm-1.854-34.665l11.28 18.487 1.707-1.042-11.279-18.486-1.708 1.041zm11.133 17.966V126h2v-16.699h-2zm1 15.699h-11.279v2h11.279v-2zm25.045-37.877v35.186h2V87.123h-2zm1.855 34.667l-11.279-18.575-1.71 1.038 11.28 18.575 1.709-1.038zm-11.134-18.056V87.123h-2v16.611h2zm-1-15.611h11.279v-2h-11.279v2zm17.549 29.586v-1h-1v1h1zm3.896 0v1h1v-1h-1zm0-22.324h1v-1h-1v1zm-3.896 0h-1v1h1v-1zm0-8.262v-1h-1v1h1zm20.742 0h1v-1h-1v1zm0 8.262v1h1v-1h-1zm-3.896 0v-1h-1v1h1zm0 22.324h-1v1h1v-1zm3.896 0h1v-1h-1v1zm0 8.291v1h1v-1h-1zm-20.742 0h-1v1h1v-1zm5.508-49.248v-1h-1v1h1zm9.843 0h1v-1h-1v1zm0 6.475v1h1v-1h-1zm-9.843 0h-1v1h1v-1zm-5.508 35.482h3.896v-2h-3.896v2zm4.896-1V95.385h-2v22.324h2zm-1-23.324h-3.896v2h3.896v-2zm-2.896 1v-8.262h-2v8.262h2zm-1-7.262h20.742v-2h-20.742v2zm19.742-1v8.262h2v-8.262h-2zm1 7.262h-3.896v2h3.896v-2zm-4.896 1v22.324h2V95.385h-2zm1 23.324h3.896v-2h-3.896v2zm2.896-1V126h2v-8.291h-2zm1 7.291h-20.742v2h20.742v-2zm-19.742 1v-8.291h-2V126h2zm4.508-48.248h9.843v-2h-9.843v2zm8.843-1v6.475h2v-6.475h-2zm1 5.475h-9.843v2h9.843v-2zm-8.843 1v-6.475h-2v6.475h2zM72.901 196.752l.932-.36-.247-.64H72.9v1zm-12.715 0l-.944-.33-.466 1.33h1.41v-1zm2.695-7.705v-1h-.71l-.234.67.944.33zm7.031 0v1h1.458l-.525-1.36-.933.36zm-10.4-26.924v-1h-1.459l.526 1.36.933-.36zm12.627 0l.929-.37-.251-.63h-.678v1zM87.637 201v1h1.475l-.546-1.37-.93.37zm-13.096 0l-.933.36.247.64h.686v-1zm-17.813 0v1h.725l.226-.688-.95-.312zm-12.51 0l-.936-.35-.505 1.35h1.442v-1zm13.887-37.119l.938-.349-.935-2.512-.94 2.51.938.351zm5.743 15.439l.95.312.109-.332-.122-.328-.937.348zm9.052 16.432H60.185v2H72.9v-2zm-11.77 1.33l2.695-7.705-1.888-.66-2.695 7.705 1.888.66zm1.75-7.035h7.032v-2h-7.031v2zm7.965-1.36l-10.4-26.924-1.866.72 10.4 26.924 1.866-.72zm-11.333-25.564h12.627v-2H59.512v2zm11.698-.63l15.498 38.877 1.858-.74-15.498-38.877-1.858.74zM87.637 200H74.54v2h13.096v-2zm-12.163.64l-1.64-4.248-1.867.72 1.641 4.248 1.866-.72zM56.728 200h-12.51v2h12.51v-2zm-11.573 1.35l13.887-37.119-1.873-.701-13.887 37.12 1.873.7zm12.013-37.121l5.742 15.44 1.875-.697-5.742-15.44-1.875.697zm5.73 14.779l-7.12 21.68 1.9.624 7.12-21.68-1.9-.624zM91.328 201h-1v1h1v-1zm0-38.877v-1h-1v1h1zm12.949 0h1v-1h-1v1zm0 38.877v1h1v-1h-1zm2.051-31.113h-1v1h1v-1zm0-7.764v-1h-1v1h1zm14.795 0l.706-.708-.293-.292h-.413v1zm7.793 7.764h1v-.416l-.294-.293-.706.709zm0 11.66l.707.707.293-.293v-.414h-1zm-5.977 5.976l-.894.448.621 1.241.981-.981-.708-.708zm-.41-.82l.895-.447-.319-.638-.707.094.131.991zm-12.158 1.611l-.131-.991-1.34.178.562 1.229.909-.416zm.469 1.026v1h1.557l-.648-1.416-.909.416zm-4.512 0h-1v1h1v-1zm0-7.529v-1h-1v1h1zm9.727 0v1h1v-1h-1zm0-11.924h1v-1h-1v1zM130.234 201v1h1.679l-.799-1.476-.88.476zm-13.828 0l-.902.431.272.569h.63v-1zm-5.566-11.66v-1h-1.586l.683 1.431.903-.431zm10.283 0v1h.414l.293-.293-.707-.707zm1.816-1.817l.88-.476-.638-1.179-.949.948.707.707zM92.329 201v-38.877h-2V201h2zm-1-37.877h12.948v-2H91.328v2zm11.948-1V201h2v-38.877h-2zm1 37.877H91.328v2h12.949v-2zm3.051-30.113v-7.764h-2v7.764h2zm-1-6.764h14.795v-2h-14.795v2zm14.089-.292l7.793 7.764 1.412-1.417-7.793-7.763-1.412 1.416zm7.499 7.056v11.66h2v-11.66h-2zm.293 10.953l-5.977 5.976 1.415 1.415 5.976-5.977-1.414-1.414zm-4.375 6.236l-.41-.82-1.789.894.41.821 1.789-.895zm-1.436-1.364l-12.158 1.611.262 1.983 12.159-1.612-.263-1.982zm-12.936 3.018l.468 1.026 1.819-.832-.468-1.025-1.819.831zm1.378-.39h-4.512v2h4.512v-2zm-3.512 1v-7.529h-2v7.529h2zm-1-6.529h9.727v-2h-9.727v2zm10.727-1v-11.924h-2v11.924h2zm-1-12.924h-9.727v2h9.727v-2zM130.234 200h-13.828v2h13.828v-2zm-12.925.569l-5.567-11.66-1.805.862 5.567 11.66 1.805-.862zm-6.469-10.229h10.283v-2H110.84v2zm10.99-.293l1.817-1.816-1.415-1.415-1.816 1.817 1.414 1.414zm.23-2.048l7.295 13.477 1.759-.952-7.295-13.477-1.759.952zm25.752-2.966v-1h-1v1h1zm0 15.967v1h1v-1h-1zm-12.949 0h-1v1h1v-1zm0-38.877v-1h-1v1h1zm12.949 0h1v-1h-1v1zm0 15.41h-1v1h1v-1zm12.393 0h1v-1h-1v1zm0 7.5v1h1v-1h-1zm-10.342-15.381h-1v1h1v-1zm0-7.529v-1h-1v1h1zm20.244 0h1v-1h-1v1zm0 11.25v1h1v-1h-1zm-12.187 0h-1v1h1v-1zm0-3.721h1v-1h-1v1zM149.863 201h-1v1h1v-1zm0-7.764v-1h-1v1h1zm7.295 0v1h1v-1h-1zm0-3.896v-1h-1v1h1zm12.949 0h1v-1h-1v1zm0 11.66v1h1v-1h-1zm-23.295-15.967V201h2v-15.967h-2zm1 14.967h-12.949v2h12.949v-2zm-11.949 1v-38.877h-2V201h2zm-1-37.877h12.949v-2h-12.949v2zm11.949-1v15.41h2v-15.41h-2zm1 16.41h12.393v-2h-12.393v2zm11.393-1v7.5h2v-7.5h-2zm1 6.5h-12.393v2h12.393v-2zm-9.342-14.381v-7.529h-2v7.529h2zm-1-6.529h20.244v-2h-20.244v2zm19.244-1v11.25h2v-11.25h-2zm1 10.25H157.92v2h12.187v-2zm-11.187 1v-3.721h-2v3.721h2zm-1-4.721h-8.057v2h8.057v-2zM150.863 201v-7.764h-2V201h2zm-1-6.764h7.295v-2h-7.295v2zm8.295-1v-3.896h-2v3.896h2zm-1-2.896h12.949v-2h-12.949v2zm11.949-1V201h2v-11.66h-2zm1 10.66h-20.244v2h20.244v-2zm43.565 1v1h1.778l-.924-1.52-.854.52zm-13.77 0l-.855.518.292.482h.563v-1zm-23.554-38.877v-1h-1.775l.919 1.518.856-.518zm13.681 0l.855-.52-.292-.48h-.563v1zM176.348 201h-1v1h1v-1zm0-35.186l.853-.52-1.853-3.038v3.558h1zm11.279 18.487h1v-.281l-.146-.24-.854.521zm0 16.699v1h1v-1h-1zm26.045-38.877h1v-1h-1v1zm0 35.186l-.855.519 1.855 3.054v-3.573h-1zm-11.279-18.575h-1v.28l.145.239.855-.519zm0-16.611v-1h-1v1h1zM213.672 200h-13.77v2h13.77v-2zm-12.914.482l-23.555-38.877-1.711 1.036 23.555 38.877 1.711-1.036zm-24.41-37.359h13.681v-2h-13.681v2zm12.827-.48l23.642 38.877 1.709-1.04-23.642-38.877-1.709 1.04zM177.348 201v-35.186h-2V201h2zm-1.854-34.665l11.279 18.487 1.708-1.042-11.28-18.486-1.707 1.041zm11.133 17.966V201h2v-16.699h-2zm1 15.699h-11.279v2h11.279v-2zm25.045-37.877v35.186h2v-35.186h-2zm1.855 34.667l-11.28-18.575-1.709 1.038 11.279 18.575 1.71-1.038zm-11.134-18.056v-16.611h-2v16.611h2zm-1-15.611h11.279v-2h-11.279v2zm43.652 33.629l.933-.36-.247-.64h-.686v1zm-12.715 0l-.944-.33-.465 1.33h1.409v-1zm2.695-7.705v-1h-.709l-.235.67.944.33zm7.032 0v1h1.458l-.526-1.36-.932.36zm-10.401-26.924v-1h-1.458l.525 1.36.933-.36zm12.627 0l.929-.37-.251-.63h-.678v1zM260.781 201v1h1.475l-.546-1.37-.929.37zm-13.095 0l-.933.36.247.64h.686v-1zm-17.813 0v1h.724l.226-.688-.95-.312zm-12.51 0l-.936-.35-.506 1.35h1.442v-1zm13.887-37.119l.937-.349-.934-2.512-.94 2.51.937.351zm5.742 15.439l.95.312.109-.332-.122-.328-.937.348zm9.053 16.432H233.33v2h12.715v-2zm-11.771 1.33l2.695-7.705-1.888-.66-2.695 7.705 1.888.66zm1.751-7.035h7.032v-2h-7.032v2zm7.964-1.36l-10.4-26.924-1.866.72 10.401 26.924 1.865-.72zm-11.333-25.564h12.627v-2h-12.627v2zm11.698-.63l15.498 38.877 1.858-.74-15.498-38.877-1.858.74zM260.781 200h-13.095v2h13.095v-2zm-12.163.64l-1.64-4.248-1.866.72 1.641 4.248 1.865-.72zm-18.745-.64h-12.51v2h12.51v-2zm-11.573 1.35l13.887-37.119-1.874-.701-13.886 37.12 1.873.7zm12.013-37.121l5.742 15.44 1.874-.697-5.742-15.44-1.874.697zm5.729 14.779l-7.119 21.68 1.9.624 7.119-21.68-1.9-.624z"
        fill="#536DFE"
      />
    </Svg>
  );
}

export default SvgLogo;
