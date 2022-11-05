import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";

export const getServerSideProps = async () => {
  axios.get("http://localhost:3333/").then((data) => console.log(data.data));

  return {
    props: {},
  };
};

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}
