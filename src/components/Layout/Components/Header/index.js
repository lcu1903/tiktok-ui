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
import { Link } from 'react-router-dom';
import routesConfig from './../../../../config/routes';
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
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus}/>}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Create effects" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <EffectIcon className={cx('ef_btn')}/>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
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
                                src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/313358581_3304383283118290_6302847273669008231_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7ug957vY5yQAX_GHbjJ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfCCRWEUYjWM7O2QaabOAm2BOC7jWMDTNLSCCUg0Jbszjw&oe=6419EA66"
                                alt="Nguyen van a"
                                fallback="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/313358581_3304383283118290_6302847273669008231_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7ug957vY5yQAX_GHbjJ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfCCRWEUYjWM7O2QaabOAm2BOC7jWMDTNLSCCUg0Jbszjw&oe=6419EA66"
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
