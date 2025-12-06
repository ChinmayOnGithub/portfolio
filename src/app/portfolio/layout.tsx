import InteractiveBackground from '../components/InteractiveBackground';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <InteractiveBackground />
      {children}
    </>
  );
}
