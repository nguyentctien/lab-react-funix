import { changePassword } from '../../auth/auth';
import { auth } from '../../auth/firebase';
import classes from './ProfileForm.module.css';
import { useEffect, useState } from 'react';

const ProfileForm = () => {
  const [enterNewPass, setEnterNewPass] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        // Người dùng đã đăng nhập
        setUser(currentUser);
      } else {
        // Người dùng chưa đăng nhập
        setUser(null);
      }
    });

    // Hủy đăng ký trình nghe khi component bị hủy
    return () => unsubscribe();
  }, []);
  // ! chua dung duoc
  const changePasswordHandler = async e => {
    e.preventDefault();
    if (user) {
      console.log(enterNewPass);
      await changePassword(enterNewPass);
    } else {
      alert('Mời đăng nhập trước');
    }
  };
  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input
          type='password'
          id='new-password'
          onChange={e => setEnterNewPass(e.target.value)}
        />
      </div>
      <div className={classes.action}>
        <button> Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
