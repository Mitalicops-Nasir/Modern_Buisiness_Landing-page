import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-3">
            <p className="opacity-78">Copyright, Mitalic_Nasir</p>
            <div className="flex items-center justify-center sm:ml-auto">
              <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover-text-p1">
                Privacy Policy
              </p>
              <p className="text-p5 transition-all duration-500 hover-text-p1">
                Term of Use
              </p>
            </div>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map((social) => (
              <li key={social.id}>
                <a href={social.url} className="social-icon">
                  <img
                    src={social.icon}
                    alt={social.title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
