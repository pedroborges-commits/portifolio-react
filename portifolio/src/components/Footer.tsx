function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-[#F7F7F8] px-10 pt-10 pb-8">
        <div className="flex justify-center items-center gap-8">
          <a
            href="https://github.com/pedrom01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./git.png" alt="" className="w-6"></img>
          </a>
          <a
            href="https://www.instagram.com/pedrom022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./insta.png" alt="" className="w-6"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-manoel-562743214/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./linkedin.jpg" alt="" className="w-6"></img>
          </a>
        </div>
        <p className="mt-3 text-sm text-center px-4 ">
          2026 Pedro Manoel - todos os direitos reservados
        </p>
      </div>
    </>
  );
}

export default Footer;
