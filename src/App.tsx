import Logo from "./assets/logo.png";
import RegisterForm from "./components/register-form";

function App() {
  return (
    <div className="max-w-[375px] mx-auto">
      <header className="h-51.75 pt-4 w-full rounded-b-3xl bg-[#017785]">
        <img className="mx-auto" src={Logo} width={47} height={62} alt="سپر" />
      </header>
      <section className="mx-6">
        <RegisterForm />
      </section>
    </div>
  );
}

export default App;
