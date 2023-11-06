import { review01, about02 } from "assets/import";

const About = () => {
  return (
    <div className="w-[1330px] h-[1800px] mx-[96px] py-[60px]">
      <h1 className="heading-01 text-center mt-[80px]">About</h1>
      <h3 className="heading-03 mt-[24px] mb-[46px] text-center">
        Who we are and why we do what we do!
      </h3>
      <h5 className="heading-05 w-[670px] ml-[338px] mb-[39px]">
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
        placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
        sodales lectus placerat quis.
      </h5>
      <h2 className="heading-02 ml-[338px]">Top trends</h2>
      <img
        className="w-[670px] h-[300px] mb-[48px] bg-grays ml-[338px] mt-[23px] rounded-md"
        src={review01}
        alt="about"
      />
      <h5 className="heading-05 w-[670px] ml-[338px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.
      </h5>
      <h2 className="heading-02 ml-[338px] mt-[39px]">Produced with care</h2>
      <img
        className="w-[670px] h-[300px] mb-[48px] bg-grays ml-[338px] mt-[23px] rounded-md"
        src={about02}
        alt="about"
      />
      <h5 className="heading-05 w-[670px] ml-[338px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
        in molestie diam bibendu.
      </h5>
    </div>
  );
};

export default About;
