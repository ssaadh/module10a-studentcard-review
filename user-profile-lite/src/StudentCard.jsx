// This file takes in props from a parent component and passes those
// name, major, year, bio, imageUrl, and creates a student profile card
// with html tags being used directly via JSX as the return of the
// React component with the variables filling in the content data

// Had to import React as it was being called for useState below
import React from 'react';

function StudentCard(props) {
  // destructuring the specific prop object values by their key name
  const { name, major, year, bio, imageUrl } = props;
  // Creating a changeable "state" variable holding a boolean
  // The default value is false. Use showBio to show the content
  // and setShowBio for setting/changing the boolean value
  const [showBio, setShowBio] = React.useState(false);

  // Subverts the value to make it the opposite of what it currently is
  // True to False and vice versa
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  // The return of a React component is JSX
  return (
    // The outer div holding the entire StudentCard component and data
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {/* An image element that is circular via borderRadius */}
      {/* imageUrl and name are the prop values used here */}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      {/* Header element containing name from props */}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      {/* A paragraph element containing major and years from props */}
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
      {/* A button element doing some magic where if you click the button */}
      {/* It will connect to the toggleBio function and flip the Bio being shown via boolean value */}
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {/* This way the correct text is displayed based on showBio's boolean value */}
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {/* If the showBio is true then also do this element showing the bio */}
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

export default StudentCard;
