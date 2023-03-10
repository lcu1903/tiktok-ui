import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faCoins,
    faCog,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faKeyboard, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import images from './../../../../assets/image/index';
import Button from 'src/components/Button';
import Menu from './../../../Popper/Menu/index';
import Image from './../../../Image/index.js';
import { UploadIcon, MessageIcon, InboxIcon, EffectIcon } from './../../../Icons/index';

import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handlechange
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUserCircle} />,
            title: 'View Profile',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faCog} />,
            title: 'Settings',
            to: '/feedback',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/feedback',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok"></img>

               <Search/>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Create effects">
                                <button className={cx('action-btn')}>
                                    <EffectIcon className={cx('ef_btn')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Messages">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<UploadIcon />}>
                                Upload
                            </Button>

                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/330440823_917525046263195_139611596380080579_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ZVt6HMoDS5wAX8_zKgr&_nc_oc=AQn44e9V1jXGlGDlHsmzKlb8w_yuqiPQBBaTrgpFruxuAmWxcRK9Uom7uSH7chh_x57lYawX-HPFJuyi7ij6fZhL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR8i8oKTk68Q4vq6yg17EaRe21v1O59ipNSKImDyukVzw&oe=64104CA1"
                                alt="Nguyen van a"
                                fallback="https://scontent.xx.fbcdn.net/v/t1.15752-9/330440823_917525046263195_139611596380080579_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ZVt6HMoDS5wAX8_zKgr&_nc_oc=AQn44e9V1jXGlGDlHsmzKlb8w_yuqiPQBBaTrgpFruxuAmWxcRK9Uom7uSH7chh_x57lYawX-HPFJuyi7ij6fZhL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR8i8oKTk68Q4vq6yg17EaRe21v1O59ipNSKImDyukVzw&oe=64104CA1"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
