import { string } from "prop-types";

type NameTagProps = {
  name: string;
};

const NameTag = ({ name }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>[Your Name Here]</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag name={"Joe"} />;

export default Application;
