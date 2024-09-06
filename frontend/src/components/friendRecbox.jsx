import React from 'react'
import Friend from './friend'


const FriendRecbox = () => {

  const styles = {
    card: {
      width: '320px',
      height: 'auto',

      border: "1px solid  #E5E7EB",
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '10%',
      marginTop: '15%'
    },
    title: {
      padding: '10px 15px',
      fontWeight: 600,
      fontSize: '1.3em',
    },
  };

  return (
    <div style={styles.card}>
      <p style={styles.title}>Who to follow</p>
      <Friend />
    </div>
  );
};




export default FriendRecbox