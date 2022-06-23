import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://scontent.fpnh22-2.fna.fbcdn.net/v/t39.30808-6/283076304_1422598814869761_2625711405753232042_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xjPN9s_4bzoAX-6cEub&_nc_ht=scontent.fpnh22-2.fna&oh=00_AT_JVpV4eSkYAsC1j_onTtfSzf4VSGt3SFdXmpawZ_pJ8A&oe=62B94420" alt="Hoa"/>
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
        </h4>
        <span className={cx('user-name')}>Nguyenvana</span>
      </div>
    </div>
  ) 
}

export default AccountItem;
