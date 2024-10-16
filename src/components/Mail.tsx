const Mail = () => {
  return (
    <div className="fixed bottom-20 -right-72 mail font-mono text-lg rotate-90 ">
      <div className="container flex items-center gap-5 text-textColor">
        <a
          href="mailto:ppaliwal868@gmail.com"
          className="text-textColor hover:text-primaryColor hover:-translate-x-2 duration-300 ease-in-out tracking-widest"
        >
          ppaliwal868@gmail.com
        </a>
        <hr className="border-t-4 w-96 text-textColor bg-bgcolor border-black rounded-xl " />
      </div>
    </div>
  );
};

export default Mail;
