type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const Container = ({ children }: Props) => {
  return (
    <section className="flex flex-col relative flex-1 justify-center items-center border-[1px] border-gray min-h-[80vh] px-8 gap-4 py-10">
      {children}
    </section>
  );
};
