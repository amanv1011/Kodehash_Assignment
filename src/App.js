import React, { useEffect, useState } from 'react';
import './App.css';
import Profile from './Components/ProfileCard/Profile';
import axios from 'axios';
import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar/Navbar';





function App() {

  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUserList(res.data)
      setLoading(true)
    })
  }, [])



  return (
    <>
    <Navbar/>
    <div className='app'>

      {loading ? userList.map((ele, i) => {

        return <Profile key={i} username={ele.username} name={ele.name} email={ele.email} website={ele.website} company={ele.company.name} catchPhrase={ele.company.catchPhrase} phone={ele.phone} street={ele.address.street} suite={ele.address.suite} city={ele.address.city} zipcode={ele.address.zipcode} />

      }) : <Loader />}


    </div>
    </>

  );
}

export default App;



// echo "# Kodehash_Assignment" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/amanv1011/Kodehash_Assignment.git
// git push -u origin main
// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"