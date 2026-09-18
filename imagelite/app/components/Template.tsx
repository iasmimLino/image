import React from "react";

interface TemplateProps{
  children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> =({children}: TemplateProps) => {
  return(
    <>
    <Header />
    {children}
    <Footer />
    </>
  );
}

const Header: React.FC = () => {
  return(
    <header className="bg-violet-500 text-black py-3">
      <div className="container mx-auto px-4 flex justify-between items-center px-4">
        <h1>ImageLite</h1>
      </div>
    </header>
  );
}

const Footer: React.FC = () => {
  return(
    <footer className="bg-emerald-300 text-black py-3">
      <div className="container mx-auto px-4 flex justify-between items-center px-4">
        <h1>Developed by Linux</h1>
      </div>
    </footer>
  );
}