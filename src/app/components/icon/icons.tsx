type Path = {
    data: string,
    strokeWidth?: number,
    fill?: string,
    strokeLinecap?: "butt" | "round" | "square" | "inherit",
    strokeLinejoin?: "round" | "inherit" | "miter" | "bevel"
}

type Icon = {
    [iconName: string]: {
        viewBox: string,
        paths: Path[]
    }
}

const icons: Icon = {
    'ticket': {
        viewBox: '0 0 32 32',
        paths: [
            {
                data: "M12 7V25",
                strokeWidth: 2.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            },
            {
                data: "M3 20.8988C2.99996 20.6684 3.07957 20.4451 3.22536 20.2667C3.37114 20.0883 3.57412 19.9658 3.7999 19.92C4.70332 19.7354 5.51527 19.2445 6.09839 18.5302C6.68151 17.8159 7 16.9221 7 16C7 15.0779 6.68151 14.1841 6.09839 13.4698C5.51527 12.7555 4.70332 12.2646 3.7999 12.08C3.57412 12.0342 3.37114 11.9117 3.22536 11.7333C3.07957 11.5549 2.99996 11.3316 3 11.1012V8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H28C28.2652 7 28.5196 7.10536 28.7071 7.29289C28.8946 7.48043 29 7.73478 29 8V11.1012C29 11.3316 28.9204 11.5549 28.7746 11.7333C28.6289 11.9117 28.4259 12.0342 28.2001 12.08C27.2967 12.2646 26.4847 12.7555 25.9016 13.4698C25.3185 14.1841 25 15.0779 25 16C25 16.9221 25.3185 17.8159 25.9016 18.5302C26.4847 19.2445 27.2967 19.7354 28.2001 19.92C28.4259 19.9658 28.6289 20.0883 28.7746 20.2667C28.9204 20.4451 29 20.6684 29 20.8988V24C29 24.2652 28.8946 24.5196 28.7071 24.7071C28.5196 24.8946 28.2652 25 28 25H4C3.73478 25 3.48043 24.8946 3.29289 24.7071C3.10536 24.5196 3 24.2652 3 24V20.8988Z",
                strokeWidth: 2.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }
        ]
    },
   'coin': {
        viewBox: '0 0 32 32',
        paths: [
            {
                data: "M16 9V11",
                strokeWidth: 2.7,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            },
            {
                data: "M16 21V23",
                strokeWidth: 2.7,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            },
            {
                data: "M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z",
                strokeWidth: 2.7,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            },
            {
                data: "M13 21H17.5C18.163 21 18.7989 20.7366 19.2678 20.2678C19.7366 19.7989 20 19.163 20 18.5C20 17.837 19.7366 17.2011 19.2678 16.7322C18.7989 16.2634 18.163 16 17.5 16H14.5C13.837 16 13.2011 15.7366 12.7322 15.2678C12.2634 14.7989 12 14.163 12 13.5C12 12.837 12.2634 12.2011 12.7322 11.7322C13.2011 11.2634 13.837 11 14.5 11H19",
                strokeWidth: 2.7,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }
        ]
    },
    'user': {
        viewBox: '0 0 32 32',
        paths: [
            {
                data: "M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z",
                strokeWidth: 3,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            },
            {
                data: "M3.87354 26.9988C5.10299 24.8708 6.8708 23.1037 8.99939 21.8752C11.128 20.6467 13.5424 20 16.0001 20C18.4577 20 20.8721 20.6468 23.0007 21.8754C25.1292 23.1039 26.897 24.871 28.1264 26.9991",
                strokeWidth: 3,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }
        ]
    },
    'google': {
        viewBox: '0 0 48 48',
        paths: [
            {
                data: "M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z",
                fill: '#4285F4',
                strokeWidth: 0,
            },
            {
                data: "M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z",
                fill: "#34A853",
                strokeWidth: 0,
            },
            {
                data: "M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z",
                fill: "#FBBC04",
                strokeWidth: 0,
            },
            {
                data: "M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z",
                fill: "#EA4335",
                strokeWidth: 0,
            }
        ]
    },
    'facebook': {
        viewBox: '0 0 48 48',
        paths: [
            {
                data: "M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z",
                fill: '#1877F2',
                strokeWidth: 0,
            },
            {
                data: "M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.602 28.68 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.9411 9.375 29.3152 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C22.7349 48.0972 25.2651 48.0972 27.75 47.7084V30.9375H33.3422Z",
                fill: "white",
                strokeWidth: 0,
            }
        ]
    }
};

export default icons;
