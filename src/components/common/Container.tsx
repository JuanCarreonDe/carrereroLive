type Props = {
  id?: string;
  children: string | JSX.Element | JSX.Element[];
};

export const Container = ({ id, children }: Props) => {
  return (
    // min-h-[80vh]
    <section
      id={id}
      className="flex flex-col relative flex-1 justify-center items-center border-[1px] border-primary px-8 gap-4 py-10 scroll-mt-20"
    >
      {children}
    </section>
  );
};
