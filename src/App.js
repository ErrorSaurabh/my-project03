import logo from './logo.svg';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Card from './components/Card';
function App() {
  return (
    <>
      <NavbarComp/>
      <Card title="Rohit Sharma" desc="(C)" button="Learn More" imgUrl="https://opt.toiimg.com/recuperator/img/toi/m-69257289/69257289.jpg"/>
      <Card title="Virat Kohli" desc="(B)" button="Learn More" imgUrl="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"/>
      <Card title="Ishan Kishan" desc="(W)" button="Learn More" imgUrl="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT78l1WDUDV4EbYINpg_uFKY-s17ymvn-cwA30DS0tsfkuLHsEmuPleP7IZgdZkUKHUR7yxxs6yUawYrPsvjHzy5UkwhvSp5RU9BQVTrxSb"/>
      <Card title="Shubman Gill" desc="(B)" button="Learn More" imgUrl="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR3RR5odAU8dI6YfTMYNHothnsJfj-BsHk4FlVYGV3b6CiWz_Itq2TR6wrrjUGFC-CyuFFj54h1AJlKGd0"/>
    </>
  );
}

export default App;