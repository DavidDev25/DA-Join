/**
 * @module "icons.js"
 */

/**
 * Returns an SVG icon based on the specified type and optional class name.
 *
 * @param {string} type - The type of icon to return. Valid types are 'edit', 'delete', 'person', 'arrowLeft', 'dots', 'plus', and 'searchLens'.
 * @param {string} [className=""] - Optional class name to apply to the SVG element.
 * @returns {string} The SVG markup for the specified icon.
 */
export function returnIcon(type, className = "") {
  const icons = {
    edit: /*html*/ `
            <svg class="${className}" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z"/>
            </svg>
        `,
    delete: /*html*/ `
            <svg class="${className}" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM7 6V19H17V6H7ZM9 16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16ZM13 16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16Z"/>
            </svg>
        `,
    person: /*html*/ `
            <svg  class="${className}" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.8291 19.1667C25.5132 19.1667 25.2497 19.0602 25.0386 18.8473C24.8275 18.6343 24.7219 18.3704 24.7219 18.0556V14.9445H21.6108C21.296 14.9445 21.0321 14.8376 20.8191 14.6239C20.6062 14.4102 20.4997 14.1454 20.4997 13.8295C20.4997 13.5136 20.6062 13.2501 20.8191 13.0389C21.0321 12.8278 21.296 12.7223 21.6108 12.7223H24.7219V9.61115C24.7219 9.29635 24.8288 9.03246 25.0425 8.81948C25.2562 8.60653 25.521 8.50005 25.8369 8.50005C26.1528 8.50005 26.4163 8.60653 26.6274 8.81948C26.8386 9.03246 26.9441 9.29635 26.9441 9.61115V12.7223H30.0552C30.37 12.7223 30.6339 12.8291 30.8469 13.0428C31.0599 13.2566 31.1663 13.5214 31.1663 13.8373C31.1663 14.1532 31.0599 14.4167 30.8469 14.6278C30.6339 14.8389 30.37 14.9445 30.0552 14.9445H26.9441V18.0556C26.9441 18.3704 26.8373 18.6343 26.6235 18.8473C26.4098 19.0602 26.145 19.1667 25.8291 19.1667ZM12.4997 16.4778C11.033 16.4778 9.81449 15.9926 8.84411 15.0223C7.87375 14.0519 7.38858 12.8334 7.38858 11.3667C7.38858 9.90005 7.87375 8.68154 8.84411 7.71118C9.81449 6.7408 11.033 6.25562 12.4997 6.25562C13.9663 6.25562 15.1849 6.7408 16.1552 7.71118C17.1256 8.68154 17.6108 9.90005 17.6108 11.3667C17.6108 12.8334 17.1256 14.0519 16.1552 15.0223C15.1849 15.9926 13.9663 16.4778 12.4997 16.4778ZM2.94411 27.1667C2.62931 27.1667 2.36542 27.0602 2.15244 26.8473C1.93949 26.6343 1.83301 26.3704 1.83301 26.0556V23.8334C1.83301 23.063 2.03115 22.3612 2.42744 21.7279C2.82375 21.0945 3.36635 20.6186 4.05524 20.3C5.62562 19.5815 7.07998 19.0649 8.41831 18.75C9.75666 18.4352 11.1159 18.2779 12.4961 18.2779C13.8763 18.2779 15.2367 18.4352 16.5774 18.75C17.9182 19.0649 19.3663 19.5815 20.9219 20.3C21.6108 20.6334 22.1571 21.113 22.5608 21.7389C22.9645 22.3649 23.1663 23.063 23.1663 23.8334V26.0556C23.1663 26.3704 23.0599 26.6343 22.8469 26.8473C22.6339 27.0602 22.37 27.1667 22.0552 27.1667H2.94411ZM4.05521 24.9445H20.9441V23.8334C20.9441 23.5149 20.8645 23.2149 20.7052 22.9334C20.546 22.6519 20.3071 22.4408 19.9886 22.3C18.5515 21.5963 17.2626 21.1204 16.1219 20.8723C14.9812 20.6241 13.7737 20.5 12.4997 20.5C11.2256 20.5 10.0182 20.6278 8.87744 20.8834C7.73671 21.1389 6.44042 21.6112 4.98857 22.3C4.69966 22.4408 4.47187 22.6519 4.30521 22.9334C4.13854 23.2149 4.05521 23.5149 4.05521 23.8334V24.9445ZM12.4997 14.2556C13.3219 14.2556 14.0089 13.9797 14.5608 13.4278C15.1126 12.876 15.3886 12.1889 15.3886 11.3667C15.3886 10.5445 15.1126 9.85746 14.5608 9.30562C14.0089 8.75375 13.3219 8.47782 12.4997 8.47782C11.6775 8.47782 10.9904 8.75375 10.4386 9.30562C9.88671 9.85746 9.61077 10.5445 9.61077 11.3667C9.61077 12.1889 9.88671 12.876 10.4386 13.4278C10.9904 13.9797 11.6775 14.2556 12.4997 14.2556Z"/>
            </svg>
        `,
    arrowLeft: /*html*/ `
          <svg class="${className}" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0097 17.8855H30.1871C31.0362 17.8855 31.7246 18.5739 31.7246 19.4231C31.7246 20.2722 31.0362 20.9606 30.1871 20.9606H13.0097L20.17 28.1209C20.7704 28.7213 20.7704 29.6946 20.17 30.295C19.5697 30.8954 18.5963 30.8954 17.996 30.295L8.53824 20.8373C7.75719 20.0562 7.75719 18.7899 8.53824 18.0089L17.996 8.55115C18.5963 7.9508 19.5697 7.9508 20.17 8.55115C20.7704 9.1515 20.7704 10.1249 20.17 10.7252L13.0097 17.8855Z"/>
            </svg>
          `,
    dots: /*html*/ `
          <svg class="${className}"  viewBox="0 0 6 22"  xmlns="http://www.w3.org/2000/svg">
              <path d="M2.99967 21.6666C2.26634 21.6666 1.63856 21.4055 1.11634 20.8833C0.594119 20.361 0.333008 19.7333 0.333008 18.9999C0.333008 18.2666 0.594119 17.6388 1.11634 17.1166C1.63856 16.5944 2.26634 16.3333 2.99967 16.3333C3.73301 16.3333 4.36079 16.5944 4.88301 17.1166C5.40523 17.6388 5.66634 18.2666 5.66634 18.9999C5.66634 19.7333 5.40523 20.361 4.88301 20.8833C4.36079 21.4055 3.73301 21.6666 2.99967 21.6666ZM2.99967 13.6666C2.26634 13.6666 1.63856 13.4055 1.11634 12.8833C0.594119 12.361 0.333008 11.7333 0.333008 10.9999C0.333008 10.2666 0.594119 9.63881 1.11634 9.11659C1.63856 8.59436 2.26634 8.33325 2.99967 8.33325C3.73301 8.33325 4.36079 8.59436 4.88301 9.11659C5.40523 9.63881 5.66634 10.2666 5.66634 10.9999C5.66634 11.7333 5.40523 12.361 4.88301 12.8833C4.36079 13.4055 3.73301 13.6666 2.99967 13.6666ZM2.99967 5.66659C2.26634 5.66659 1.63856 5.40547 1.11634 4.88325C0.594119 4.36103 0.333008 3.73325 0.333008 2.99992C0.333008 2.26659 0.594119 1.63881 1.11634 1.11659C1.63856 0.594363 2.26634 0.333252 2.99967 0.333252C3.73301 0.333252 4.36079 0.594363 4.88301 1.11659C5.40523 1.63881 5.66634 2.26659 5.66634 2.99992C5.66634 3.73325 5.40523 4.36103 4.88301 4.88325C4.36079 5.40547 3.73301 5.66659 2.99967 5.66659Z"/>
            </svg>
          `,
    plus: /*html*/ `
            <svg class="${className}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/ svg">
              <path d="M8.66602 11.3327H0.666016V8.66602H8.66602V0.666016H11.3327V8.66602H19.3327V11.3327H11.3327V19.3327H8.66602V11.3327Z"/>
            </svg>
          `,
    searchLens: /*html*/ `
        <svg class="${className}" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.71181 13.2137C4.89463 13.2137 3.35669 12.5843 2.098 11.3256C0.839307 10.0669 0.209961 8.52899 0.209961 6.71181C0.209961 4.89463 0.839307 3.35669 2.098 2.098C3.35669 0.839307 4.89463 0.209961 6.71181 0.209961C8.52899 0.209961 10.0669 0.839307 11.3256 2.098C12.5843 3.35669 13.2137 4.89463 13.2137 6.71181C13.2137 7.44535 13.097 8.13721 12.8636 8.7874C12.6302 9.43758 12.3134 10.0127 11.9133 10.5129L17.5149 16.1145C17.6983 16.2979 17.79 16.5313 17.79 16.8147C17.79 17.0981 17.6983 17.3315 17.5149 17.5149C17.3315 17.6983 17.0981 17.79 16.8147 17.79C16.5313 17.79 16.2979 17.6983 16.1145 17.5149L10.5129 11.9133C10.0127 12.3134 9.43758 12.6302 8.7874 12.8636C8.13721 13.097 7.44535 13.2137 6.71181 13.2137ZM6.71181 11.2131C7.96217 11.2131 9.02497 10.7755 9.90022 9.90022C10.7755 9.02497 11.2131 7.96217 11.2131 6.71181C11.2131 5.46145 10.7755 4.39865 9.90022 3.5234C9.02497 2.64815 7.96217 2.21053 6.71181 2.21053C5.46145 2.21053 4.39865 2.64815 3.5234 3.5234C2.64815 4.39865 2.21053 5.46145 2.21053 6.71181C2.21053 7.96217 2.64815 9.02497 3.5234 9.90022C4.39865 10.7755 5.46145 11.2131 6.71181 11.2131Z"/>
          </svg>
        `,
    closeX: /*html*/ `
        <svg class="${className}" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99999 8.40005L2.09999 13.3C1.91665 13.4834 1.68332 13.575 1.39999 13.575C1.11665 13.575 0.883321 13.4834 0.699988 13.3C0.516654 13.1167 0.424988 12.8834 0.424988 12.6C0.424988 12.3167 0.516654 12.0834 0.699988 11.9L5.59999 7.00005L0.699988 2.10005C0.516654 1.91672 0.424988 1.68338 0.424988 1.40005C0.424988 1.11672 0.516654 0.883382 0.699988 0.700049C0.883321 0.516715 1.11665 0.425049 1.39999 0.425049C1.68332 0.425049 1.91665 0.516715 2.09999 0.700049L6.99999 5.60005L11.9 0.700049C12.0833 0.516715 12.3167 0.425049 12.6 0.425049C12.8833 0.425049 13.1167 0.516715 13.3 0.700049C13.4833 0.883382 13.575 1.11672 13.575 1.40005C13.575 1.68338 13.4833 1.91672 13.3 2.10005L8.39999 7.00005L13.3 11.9C13.4833 12.0834 13.575 12.3167 13.575 12.6C13.575 12.8834 13.4833 13.1167 13.3 13.3C13.1167 13.4834 12.8833 13.575 12.6 13.575C12.3167 13.575 12.0833 13.4834 11.9 13.3L6.99999 8.40005Z"/>
          </svg>
       `,
    urgent: /*html*/ `
        <svg class="${className}" viewBox="0 0 21 15" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_371_3787)">
            <path d="M19.5708 14.755C19.3361 14.7554 19.1076 14.6805 18.9187 14.5414L10.6666 8.45824L2.4146 14.5414C2.29874 14.627 2.16716 14.6889 2.02736 14.7237C1.88756 14.7584 1.74228 14.7653 1.59981 14.7439C1.45734 14.7226 1.32048 14.6734 1.19703 14.5992C1.07359 14.525 0.965978 14.4272 0.880349 14.3114C0.79472 14.1957 0.732748 14.0642 0.697971 13.9245C0.663194 13.7848 0.656294 13.6396 0.677664 13.4973C0.720823 13.2097 0.876514 12.9511 1.11049 12.7783L10.0146 6.20786C10.2033 6.06826 10.4319 5.99292 10.6666 5.99292C10.9014 5.99292 11.13 6.06826 11.3187 6.20786L20.2228 12.7783C20.4087 12.9153 20.5466 13.1074 20.6168 13.3272C20.6869 13.5471 20.6858 13.7835 20.6135 14.0027C20.5411 14.2219 20.4014 14.4126 20.2141 14.5477C20.0269 14.6828 19.8017 14.7554 19.5708 14.755Z"/>
            <path d="M19.5708 9.00581C19.3361 9.00621 19.1076 8.93136 18.9187 8.79226L10.6667 2.7091L2.4146 8.79226C2.18063 8.96507 1.88754 9.03793 1.59981 8.9948C1.31209 8.95167 1.05329 8.7961 0.880353 8.5623C0.707418 8.3285 0.63451 8.03563 0.677669 7.74811C0.720828 7.4606 0.876518 7.20199 1.11049 7.02919L10.0146 0.45871C10.2033 0.319119 10.4319 0.243774 10.6667 0.243774C10.9014 0.243774 11.13 0.319119 11.3187 0.45871L20.2228 7.02919C20.4087 7.1661 20.5466 7.35822 20.6168 7.5781C20.6869 7.79797 20.6858 8.03438 20.6135 8.25356C20.5412 8.47274 20.4014 8.6635 20.2141 8.79859C20.0269 8.93368 19.8017 9.0062 19.5708 9.00581Z"/>
            </g>
            <defs>
            <clipPath id="clip0_371_3787">
            <rect width="20" height="14.5098" transform="translate(0.666504 0.245117)"/>
            </clipPath>
            </defs>
        </svg>
      `,
    medium: /*html*/ `
      <svg class="${className}" viewBox="0 0 20 9" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_371_3816)">
          <path d="M18.9041 8.22552H1.09589C0.805242 8.22552 0.526498 8.10922 0.320979 7.90221C0.11546 7.6952 0 7.41443 0 7.12167C0 6.82891 0.11546 6.54814 0.320979 6.34113C0.526498 6.13412 0.805242 6.01782 1.09589 6.01782H18.9041C19.1948 6.01782 19.4735 6.13412 19.679 6.34113C19.8845 6.54814 20 6.82891 20 7.12167C20 7.41443 19.8845 7.6952 19.679 7.90221C19.4735 8.10922 19.1948 8.22552 18.9041 8.22552Z"/>
          <path d="M18.9041 2.98223H1.09589C0.805242 2.98223 0.526498 2.86594 0.320979 2.65892C0.11546 2.45191 0 2.17114 0 1.87839C0 1.58563 0.11546 1.30486 0.320979 1.09785C0.526498 0.890834 0.805242 0.774536 1.09589 0.774536L18.9041 0.774536C19.1948 0.774536 19.4735 0.890834 19.679 1.09785C19.8845 1.30486 20 1.58563 20 1.87839C20 2.17114 19.8845 2.45191 19.679 2.65892C19.4735 2.86594 19.1948 2.98223 18.9041 2.98223Z"/>
          </g>
          <defs>
          <clipPath id="clip0_371_3816">
          <rect width="20" height="7.45098" transform="translate(0 0.774536)"/>
          </clipPath>
          </defs>
        </svg>
      `,
    low: /*html*/ `
      <svg class="${className}" viewBox="0 0 21 15" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.833 9.00614C10.5984 9.00654 10.3699 8.9317 10.181 8.79262L1.27792 2.22288C1.16208 2.13733 1.06424 2.02981 0.989988 1.90647C0.915732 1.78313 0.866516 1.64638 0.845148 1.50404C0.801994 1.21655 0.874893 0.923717 1.04781 0.689945C1.22073 0.456173 1.47949 0.300615 1.76719 0.257493C2.05488 0.21437 2.34794 0.287216 2.58188 0.460004L10.833 6.54248L19.0841 0.460004C19.2 0.374448 19.3315 0.312529 19.4713 0.277782C19.6111 0.243035 19.7564 0.236141 19.8988 0.257493C20.0413 0.278844 20.1781 0.328025 20.3016 0.402225C20.425 0.476425 20.5326 0.574193 20.6182 0.689945C20.7038 0.805697 20.7658 0.937168 20.8006 1.07685C20.8353 1.21653 20.8422 1.36169 20.8209 1.50404C20.7995 1.64638 20.7503 1.78313 20.676 1.90647C20.6018 2.02981 20.5039 2.13733 20.3881 2.22288L11.485 8.79262C11.2961 8.9317 11.0676 9.00654 10.833 9.00614Z"/>
          <path d="M10.833 14.7547C10.5984 14.7551 10.3699 14.6802 10.181 14.5412L1.27792 7.97142C1.04398 7.79863 0.888302 7.54005 0.845148 7.25257C0.801994 6.96509 0.874893 6.67225 1.04781 6.43848C1.22073 6.20471 1.47949 6.04915 1.76719 6.00603C2.05488 5.96291 2.34794 6.03575 2.58188 6.20854L10.833 12.291L19.0841 6.20854C19.3181 6.03575 19.6111 5.96291 19.8988 6.00603C20.1865 6.04915 20.4453 6.20471 20.6182 6.43848C20.7911 6.67225 20.864 6.96509 20.8209 7.25257C20.7777 7.54005 20.622 7.79863 20.3881 7.97142L11.485 14.5412C11.2961 14.6802 11.0676 14.7551 10.833 14.7547Z"/>
        </svg>
      `,
    summary: /*html*/ `
      <svg class="${className}" viewBox="0 0 30 31" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.2273 3.48291H4.77273H4.5C3.39543 3.48291 2.5 4.37864 2.5 5.48321C2.5 5.663 2.5 5.79037 2.5 5.82288V26.2774V26.4829C2.5 27.5875 3.39572 28.4829 4.50029 28.4829C4.64377 28.4829 4.74401 28.4829 4.77272 28.4829H25.2273C25.256 28.4829 25.3562 28.4829 25.4997 28.4829C26.6043 28.4829 27.5 27.587 27.5 26.4824C27.5 26.3756 27.5 26.3017 27.5 26.2774V5.82285C27.5 5.79035 27.5 5.66299 27.5 5.48321C27.5 4.37864 26.6043 3.48291 25.4997 3.48291C25.3562 3.48291 25.256 3.48291 25.2273 3.48291ZM17.2727 26.2774H4.77273V17.1865H17.2727V26.2774ZM17.2727 14.9138H4.77273V5.82288L17.2727 5.82285V14.9138ZM25.2273 26.2774H19.5455V5.82288H25.2273V26.2774Z"/>
        </svg>
    `,
    addTask: /*html*/ `
      <svg class="${className}" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.62652 25.1853C1.95579 25.1853 1.38161 24.9465 0.903963 24.4688C0.426321 23.9912 0.1875 23.417 0.1875 22.7462V5.67308C0.1875 5.00235 0.426321 4.42816 0.903963 3.95052C1.38161 3.47287 1.95579 3.23405 2.62652 3.23405H13.5107L11.0716 5.67308H2.62652V22.7462H19.6997V14.2706L22.1387 11.8316V22.7462C22.1387 23.417 21.8999 23.9912 21.4223 24.4688C20.9446 24.9465 20.3704 25.1853 19.6997 25.1853H2.62652ZM16.2546 3.93527L17.9924 5.64259L9.9436 13.6914V15.4292H11.6509L19.7302 7.34991L21.468 9.05722L13.3887 17.1365C13.1651 17.3601 12.906 17.5379 12.6113 17.67C12.3166 17.8021 12.0066 17.8682 11.6814 17.8682H8.72409C8.37856 17.8682 8.08892 17.7513 7.85518 17.5176C7.62144 17.2839 7.50457 16.9942 7.50457 16.6487V13.6914C7.50457 13.3662 7.56555 13.0562 7.6875 12.7615C7.80945 12.4668 7.98222 12.2076 8.20579 11.9841L16.2546 3.93527ZM21.468 9.05722L16.2546 3.93527L19.3034 0.886492C19.7912 0.398688 20.3755 0.154785 21.0564 0.154785C21.7373 0.154785 22.3115 0.398688 22.779 0.886492L24.4863 2.6243C24.9538 3.09178 25.1875 3.66088 25.1875 4.33161C25.1875 5.00235 24.9538 5.57145 24.4863 6.03893L21.468 9.05722Z"/>
      </svg>
    `,
    board: /*html*/ `
      <svg class="${className}" viewBox="0 0 30 31"  xmlns="http://www.w3.org/2000/svg">
        <path d="M22.9544 5.75564L22.9545 26.21C22.9538 26.8125 22.7142 27.3903 22.2881 27.8163C21.862 28.2424 21.2843 28.4821 20.6817 28.4827L16.1363 28.4827C15.5338 28.4821 14.956 28.2424 14.53 27.8163C14.1039 27.3903 13.8642 26.8125 13.8636 26.21L13.8636 5.75564C13.8642 5.15306 14.1039 4.57534 14.53 4.14926C14.956 3.72317 15.5338 3.48353 16.1363 3.48293L20.6817 3.48293C21.2843 3.48353 21.862 3.72317 22.2881 4.14926C22.7142 4.57534 22.9538 5.15306 22.9544 5.75564ZM16.1363 26.21L20.6817 26.21L20.6817 5.75564L16.1363 5.75564L16.1363 26.21ZM16.1363 5.75564L16.1363 26.21C16.1357 26.8125 15.8961 27.3902 15.47 27.8163C15.0439 28.2424 14.4662 28.482 13.8636 28.4826L9.31823 28.4826C8.71566 28.482 8.13794 28.2424 7.71185 27.8163C7.28577 27.3902 7.04613 26.8125 7.04553 26.2099L7.04553 5.75561C7.04613 5.15304 7.28577 4.57532 7.71185 4.14923C8.13793 3.72315 8.71566 3.48351 9.31823 3.48291L13.8636 3.48291C14.4662 3.48351 15.0439 3.72315 15.47 4.14923C15.8961 4.57532 16.1357 5.15306 16.1363 5.75564ZM9.31823 26.2099L13.8636 26.21L13.8636 5.75564L9.31823 5.75561L9.31823 26.2099ZM9.31823 5.75561L9.31823 26.2099C9.31763 26.8125 9.07799 27.3902 8.65191 27.8163C8.22582 28.2424 7.6481 28.482 7.04553 28.4826L2.50012 28.4826C1.89755 28.482 1.31983 28.2424 0.893741 27.8163C0.467657 27.3902 0.228019 26.8125 0.227417 26.2099L0.227416 5.75561C0.228018 5.15304 0.467656 4.57532 0.89374 4.14923C1.31982 3.72315 1.89755 3.48351 2.50012 3.48291L7.04553 3.48291C7.6481 3.48351 8.22582 3.72315 8.6519 4.14923C9.07799 4.57532 9.31763 5.15304 9.31823 5.75561ZM2.50012 26.2099L7.04553 26.2099L7.04553 5.75561L2.50012 5.75561L2.50012 26.2099Z"/>
        <path d="M29.7726 5.75589L29.7726 26.2102C29.772 26.8128 29.5323 27.3905 29.1062 27.8166C28.6802 28.2427 28.1024 28.4823 27.4999 28.4829L22.9545 28.4829C22.3519 28.4823 21.7742 28.2427 21.3481 27.8166C20.922 27.3905 20.6824 26.8125 20.6817 26.21L20.6817 5.75564C20.6823 5.15306 20.922 4.57559 21.3481 4.14951C21.7742 3.72342 22.3519 3.48379 22.9544 3.48318L27.4999 3.48318C28.1024 3.48379 28.6801 3.72342 29.1062 4.14951C29.5323 4.57559 29.772 5.15331 29.7726 5.75589ZM22.9545 26.21L27.4999 26.2102L27.4999 5.75589L22.9544 5.75564L22.9545 26.21Z"/>
      </svg>
    `,
    contacts: /*html*/ `
      <svg class="${className}" viewBox="0 0 24 26" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20.4829C10.8333 20.4829 9.71875 20.6652 8.65625 21.0298C7.59375 21.3944 6.625 21.9412 5.75 22.6704V22.9829H18.25V22.6704C17.375 21.9412 16.4062 21.3944 15.3438 21.0298C14.2812 20.6652 13.1667 20.4829 12 20.4829ZM3.25 21.5454C4.375 20.4412 5.68229 19.5715 7.17188 18.936C8.66146 18.3006 10.2708 17.9829 12 17.9829C13.7292 17.9829 15.3385 18.3006 16.8281 18.936C18.3177 19.5715 19.625 20.4412 20.75 21.5454V5.48291H3.25V21.5454ZM12 15.4829C10.7917 15.4829 9.76042 15.0558 8.90625 14.2017C8.05208 13.3475 7.625 12.3162 7.625 11.1079C7.625 9.89958 8.05208 8.86833 8.90625 8.01416C9.76042 7.15999 10.7917 6.73291 12 6.73291C13.2083 6.73291 14.2396 7.15999 15.0938 8.01416C15.9479 8.86833 16.375 9.89958 16.375 11.1079C16.375 12.3162 15.9479 13.3475 15.0938 14.2017C14.2396 15.0558 13.2083 15.4829 12 15.4829ZM12 12.9829C12.5208 12.9829 12.9635 12.8006 13.3281 12.436C13.6927 12.0715 13.875 11.6287 13.875 11.1079C13.875 10.5871 13.6927 10.1444 13.3281 9.77979C12.9635 9.4152 12.5208 9.23291 12 9.23291C11.4792 9.23291 11.0365 9.4152 10.6719 9.77979C10.3073 10.1444 10.125 10.5871 10.125 11.1079C10.125 11.6287 10.3073 12.0715 10.6719 12.436C11.0365 12.8006 11.4792 12.9829 12 12.9829ZM3.25 25.4829C2.5625 25.4829 1.97396 25.2381 1.48438 24.7485C0.994792 24.259 0.75 23.6704 0.75 22.9829V5.48291C0.75 4.79541 0.994792 4.20687 1.48438 3.71729C1.97396 3.2277 2.5625 2.98291 3.25 2.98291H4.5V0.48291H7V2.98291H17V0.48291H19.5V2.98291H20.75C21.4375 2.98291 22.026 3.2277 22.5156 3.71729C23.0052 4.20687 23.25 4.79541 23.25 5.48291V22.9829C23.25 23.6704 23.0052 24.259 22.5156 24.7485C22.026 25.2381 21.4375 25.4829 20.75 25.4829H3.25Z"/>
        </svg>
    `,
    editPen: /*html*/ `
      <svg class="${className}" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 17H3.4L12.025 8.375L10.625 6.975L2 15.6V17ZM16.3 6.925L12.05 2.725L13.45 1.325C13.8333      0.941667 14.3042 0.75 14.8625 0.75C15.4208 0.75 15.8917 0.941667 16.275 1.325L17.675 2.725C18.0583      3.10833 18.2583 3.57083 18.275 4.1125C18.2917 4.65417 18.1083 5.11667 17.725 5.5L16.3 6.925ZM14.85    8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4Z" fill="#2A3647"/>
      </svg>

      `,
    deleteTrashCan: /*html*/ `
       <svg class="${className}" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.00098 18C2.45098 18 1.98014 17.8042 1.58848 17.4125C1.19681 17.0208 1.00098 16.55 1.00098 16V3C0.717643 3 0.480143 2.90417 0.288477 2.7125C0.0968099 2.52083 0.000976562 2.28333 0.000976562 2C0.000976562 1.71667 0.0968099 1.47917 0.288477 1.2875C0.480143 1.09583 0.717643 1 1.00098 1H5.00098C5.00098 0.716667 5.09681 0.479167 5.28848 0.2875C5.48014 0.0958333 5.71764 0 6.00098 0H10.001C10.2843 0 10.5218 0.0958333 10.7135 0.2875C10.9051 0.479167 11.001 0.716667 11.001 1H15.001C15.2843 1 15.5218 1.09583 15.7135 1.2875C15.9051 1.47917 16.001 1.71667 16.001 2C16.001 2.28333 15.9051 2.52083 15.7135 2.7125C15.5218 2.90417 15.2843 3 15.001 3V16C15.001 16.55 14.8051 17.0208 14.4135 17.4125C14.0218 17.8042 13.551 18 13.001 18H3.00098ZM3.00098 3V16H13.001V3H3.00098ZM5.00098 13C5.00098 13.2833 5.09681 13.5208 5.28848 13.7125C5.48014 13.9042 5.71764 14 6.00098 14C6.28431 14 6.52181 13.9042 6.71348 13.7125C6.90514 13.5208 7.00098 13.2833 7.00098 13V6C7.00098 5.71667 6.90514 5.47917 6.71348 5.2875C6.52181 5.09583 6.28431 5 6.00098 5C5.71764 5 5.48014 5.09583 5.28848 5.2875C5.09681 5.47917 5.00098 5.71667 5.00098 6V13ZM9.00098 13C9.00098 13.2833 9.09681 13.5208 9.28848 13.7125C9.48014 13.9042 9.71764 14 10.001 14C10.2843 14 10.5218 13.9042 10.7135 13.7125C10.9051 13.5208 11.001 13.2833 11.001 13V6C11.001 5.71667 10.9051 5.47917 10.7135 5.2875C10.5218 5.09583 10.2843 5 10.001 5C9.71764 5 9.48014 5.09583 9.28848 5.2875C9.09681 5.47917 9.00098 5.71667 9.00098 6V13Z" fill="#2A3647"/>
      </svg>
    `,
    dot: /*html*/ `
      <svg class="${className}" width="8" height="8">
        <circle cx="4" cy="4" r="4" fill="black" />
      </svg>
    `,
    check_white: /*html*/ `
    <svg class="${className}" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_235473_3987" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
          <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_235473_3987)">
          <path d="M9.55057 15.65L18.0256 7.175C18.2256 6.975 18.4631 6.875 18.7381 6.875C19.0131 6.875 19.2506 6.975 19.4506 7.175C19.6506 7.375 19.7506 7.6125 19.7506 7.8875C19.7506 8.1625 19.6506 8.4 19.4506 8.6L10.2506 17.8C10.0506 18 9.81724 18.1 9.55057 18.1C9.28391 18.1 9.05057 18 8.85057 17.8L4.55057 13.5C4.35057 13.3 4.25474 13.0625 4.26307 12.7875C4.27141 12.5125 4.37557 12.275 4.57557 12.075C4.77557 11.875 5.01307 11.775 5.28807 11.775C5.56307 11.775 5.80057 11.875 6.00057 12.075L9.55057 15.65Z" fill="white"/>
        </g>
      </svg>
    `,
    check_black: /*html*/ `
    <svg class="${className}" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_235473_3987" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
          <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_235473_3987)">
          <path d="M9.55057 15.65L18.0256 7.175C18.2256 6.975 18.4631 6.875 18.7381 6.875C19.0131 6.875 19.2506 6.975 19.4506 7.175C19.6506 7.375 19.7506 7.6125 19.7506 7.8875C19.7506 8.1625 19.6506 8.4 19.4506 8.6L10.2506 17.8C10.0506 18 9.81724 18.1 9.55057 18.1C9.28391 18.1 9.05057 18 8.85057 17.8L4.55057 13.5C4.35057 13.3 4.25474 13.0625 4.26307 12.7875C4.27141 12.5125 4.37557 12.275 4.57557 12.075C4.77557 11.875 5.01307 11.775 5.28807 11.775C5.56307 11.775 5.80057 11.875 6.00057 12.075L9.55057 15.65Z" fill="black"/>
        </g>
      </svg>
  `,
    check: /*html*/ `
    <svg class="${className}" width="24" height="25" fill="black" viewBox="0 0 24 25"  xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_235473_3987" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
          <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_235473_3987)">
          <path d="M9.55057 15.65L18.0256 7.175C18.2256 6.975 18.4631 6.875 18.7381 6.875C19.0131 6.875 19.2506 6.975 19.4506 7.175C19.6506 7.375 19.7506 7.6125 19.7506 7.8875C19.7506 8.1625 19.6506 8.4 19.4506 8.6L10.2506 17.8C10.0506 18 9.81724 18.1 9.55057 18.1C9.28391 18.1 9.05057 18 8.85057 17.8L4.55057 13.5C4.35057 13.3 4.25474 13.0625 4.26307 12.7875C4.27141 12.5125 4.37557 12.275 4.57557 12.075C4.77557 11.875 5.01307 11.775 5.28807 11.775C5.56307 11.775 5.80057 11.875 6.00057 12.075L9.55057 15.65Z"/>
        </g>
      </svg>
    `,
    joinLogo: /*html*/ `
      <svg class="${className}" viewBox="0 0 101 122" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.6721 0H49.5143V25.4923H71.6721V0Z" fill="#2A3647"/>
      <path d="M49.5142 46.2251H71.6721V82.1779C71.7733 90.8292 69.3112 99.3153 64.5986 106.557C59.9455 113.594 50.963 121.966 34.3446 121.966C16.2434 121.966 5.69286 113.406 0 108.715L13.9765 91.4743C19.533 96.0112 24.885 99.7435 34.4299 99.7435C41.6567 99.7435 44.5372 96.7988 46.2247 94.2307C48.5186 90.6637 49.7052 86.4923 49.6335 82.2464L49.5142 46.2251Z" fill="#2A3647"/>
      <path d="M38.2137 30.1318H16.0559V52.3884H38.2137V30.1318Z" fill="#29ABE2"/>
      <path d="M83.2793 111.522C83.2793 116.265 80.8761 118.815 77.5183 118.815C74.1605 118.815 71.9618 115.785 71.9618 111.762C71.9618 107.739 74.2287 104.554 77.7058 104.554C81.1829 104.554 83.2793 107.687 83.2793 111.522ZM74.5355 111.711C74.5355 114.57 75.6775 116.675 77.6376 116.675C79.5977 116.675 80.7056 114.45 80.7056 111.539C80.7056 108.988 79.6829 106.592 77.6376 106.592C75.5923 106.592 74.5355 108.903 74.5355 111.711Z" fill="#2A3647"/>
      <path d="M87.6768 104.76V118.593H85.2224V104.76H87.6768Z" fill="#2A3647"/>
      <path d="M90.3358 118.593V104.76H93.0629L95.9946 110.461C96.7493 111.952 97.4207 113.483 98.0058 115.049C97.8524 113.337 97.7843 111.368 97.7843 109.177V104.76H100.034V118.593H97.4945L94.5288 112.772C93.7436 111.243 93.0437 109.671 92.4323 108.064C92.4323 109.776 92.5516 111.711 92.5516 114.09V118.576L90.3358 118.593Z" fill="#2A3647"/>
    </svg>
    `,
  };
  return icons[type] || "";
}