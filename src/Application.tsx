import TypingChildren from "./TypingChildren";
import { string } from "prop-types";

type NameTagProps = {
  name: string;
  greeting?: string;
};

const NameTag = ({ name, greeting }: NameTagProps) => {

  return (
    <main>
      <header>
        <h1>{greeting}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <section>
        <TypingChildren />
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag name={"Joe"} greeting="Yo" />;

export default Application;
