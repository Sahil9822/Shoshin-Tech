import React from 'react'
import './index.css'

const HeaderBar = ({toggleSidebar}) => {
  return (
    <div className='header-main-container'>
        <div className='header-inner-container'>
        <button className="hamburger" onClick={toggleSidebar}>
            <svg width="26" height="28" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 18.5H3V16.5H21V18.5ZM21 13.5H3V11.5H21V13.5ZM21 8.5H3V6.5H21V8.5Z" fill="#B2B2B2"/>
            </svg>  
        </button>
        <div className='input-container'>
                <input className='input-element' type='text' placeholder='Search'/>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_218)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.958 7.40981C17.2465 9.8063 17.159 13.6043 14.7626 15.8928C12.3661 18.1814 8.5681 18.0939 6.27954 15.6974C3.99097 13.301 4.07846 9.50298 6.47494 7.21441C8.87142 4.92585 12.6694 5.01333 14.958 7.40981ZM16.8243 16.6039C19.3384 13.5225 19.2219 8.97893 16.4044 6.02854C13.353 2.83323 8.28898 2.71659 5.09367 5.76801C1.89836 8.81943 1.78171 13.8834 4.83313 17.0787C7.65066 20.0291 12.184 20.3547 15.3779 17.9851L17.4925 20.1995C17.874 20.5989 18.507 20.6135 18.9064 20.2321C19.3058 19.8506 19.3204 19.2176 18.9389 18.8182L16.8243 16.6039Z" fill="#B2B2B2"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_218">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
        </div>
        </div>
        
            
        <div className='icons-header-container'>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5015 22C13.8066 22 14.8745 21.0769 14.8745 19.9487H10.1284C10.1284 20.4928 10.3784 21.0145 10.8235 21.3992C11.2685 21.7839 11.8721 22 12.5015 22ZM19.6205 15.8462V10.7179C19.6205 7.56923 17.6747 4.93333 14.2812 4.2359V3.53846C14.2812 2.68718 13.4863 2 12.5015 2C11.5167 2 10.7217 2.68718 10.7217 3.53846V4.2359C7.3164 4.93333 5.38238 7.55897 5.38238 10.7179V15.8462L3.85177 17.1692C3.10427 17.8154 3.62634 18.9231 4.68233 18.9231H20.3087C21.3647 18.9231 21.8987 17.8154 21.1512 17.1692L19.6205 15.8462Z" fill="#B2B2B2"/>
            <circle cx="17.5" cy="7" r="4.5" fill="#FF5151" stroke="white"/>
        </svg>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 5.35403C3.5 4.72971 3.73705 4.13095 4.15901 3.68948C4.58097 3.24801 5.15326 3 5.75 3H19.25C19.8467 3 20.419 3.24801 20.841 3.68948C21.2629 4.13095 21.5 4.72971 21.5 5.35403V14.7702C21.5 15.3945 21.2629 15.9933 20.841 16.4347C20.419 16.8762 19.8467 17.1242 19.25 17.1242H8.46575C8.16741 17.1243 7.8813 17.2483 7.67037 17.4691L4.46075 20.8271C4.38215 20.9095 4.28193 20.9657 4.17279 20.9886C4.06365 21.0114 3.95049 20.9999 3.84762 20.9554C3.74476 20.9109 3.65683 20.8355 3.59495 20.7387C3.53307 20.6419 3.50002 20.5281 3.5 20.4116V5.35403ZM9.125 10.0621C9.125 9.74994 9.00647 9.45056 8.7955 9.22983C8.58452 9.00909 8.29837 8.88509 8 8.88509C7.70163 8.88509 7.41548 9.00909 7.2045 9.22983C6.99353 9.45056 6.875 9.74994 6.875 10.0621C6.875 10.3743 6.99353 10.6736 7.2045 10.8944C7.41548 11.1151 7.70163 11.2391 8 11.2391C8.29837 11.2391 8.58452 11.1151 8.7955 10.8944C9.00647 10.6736 9.125 10.3743 9.125 10.0621ZM13.625 10.0621C13.625 9.74994 13.5065 9.45056 13.2955 9.22983C13.0845 9.00909 12.7984 8.88509 12.5 8.88509C12.2016 8.88509 11.9155 9.00909 11.7045 9.22983C11.4935 9.45056 11.375 9.74994 11.375 10.0621C11.375 10.3743 11.4935 10.6736 11.7045 10.8944C11.9155 11.1151 12.2016 11.2391 12.5 11.2391C12.7984 11.2391 13.0845 11.1151 13.2955 10.8944C13.5065 10.6736 13.625 10.3743 13.625 10.0621ZM17 11.2391C17.2984 11.2391 17.5845 11.1151 17.7955 10.8944C18.0065 10.6736 18.125 10.3743 18.125 10.0621C18.125 9.74994 18.0065 9.45056 17.7955 9.22983C17.5845 9.00909 17.2984 8.88509 17 8.88509C16.7016 8.88509 16.4155 9.00909 16.2045 9.22983C15.9935 9.45056 15.875 9.74994 15.875 10.0621C15.875 10.3743 15.9935 10.6736 16.2045 10.8944C16.4155 11.1151 16.7016 11.2391 17 11.2391Z" fill="#B2B2B2"/>
        </svg>

        <div className='profile-container'>
            <img className='profile-pic' src="./images/image.jpg" alt ="profile-pic"/>
            <div className='profile-name'>
                <p>Admirra John</p>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 10L12.5 15L18.5 10" stroke="#737898" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeaderBar