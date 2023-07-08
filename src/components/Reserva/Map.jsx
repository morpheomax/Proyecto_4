import Iframe from "react-iframe";
export const Map = () => {
  return (
    <>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4356868212944!2d-70.65419666469097!3d-33.43795379133519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c52097e87b81%3A0x65cea5ce2cfd8afb!2sLa%20Sanguchera%20del%20Barrio!5e0!3m2!1ses-419!2scl!4v1688755916683!5m2!1ses-419!2scl"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
};
