import React from "react";

const Friend = () => {

  const styles = {


    user: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 15px',
    },
    userContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexGrow: 1,
    },
    userContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    name: {
      fontWeight: 800,
    },
    username: {
      fontSize: '.9em',
      color: '#64696e',
    },
    image: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(295deg, rgba(22,19,70,1) 41%, rgba(89,177,237,1) 100%)',
      borderRadius: '50%',
      marginRight: '15px',
    },
    follow: {
      border: 'none',
      borderRadius: '25px',
      backgroundColor: '#0f1113',
      color: 'white',
      padding: '8px 15px',
      fontWeight: 700,

    },

  };

  return (
    <div style={styles.userContainer}>
      <div style={styles.user}>
        <div style={styles.image}></div>
        <div style={styles.userContent}>
          <div className="text">
            <span style={styles.name}>Name</span>
            <p style={styles.username}>@namedlorem</p>
          </div>
          <button className="border-none rounded-full bg-[#0f1113] text-white px-4 py-2 font-bold hover:bg-blue-500 cursor-pointer
" >Follow</button>
        </div>
      </div>
    </div>
  );
};
export default Friend;