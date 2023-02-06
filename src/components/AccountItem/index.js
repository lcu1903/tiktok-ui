import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/310734578_1532941727159817_4971799866273293903_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=OUgaxwecLZEAX_w3-M8&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfBIi_lCWmmVUqEGNa2dIwXWOyJhq48u0M0bafqBfG0B7A&oe=63B64C17"
                alt="ABC"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>zzz </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}> nguyenhvd126 </span>
            </div>
        </div>
    );
}

export default AccountItem;
