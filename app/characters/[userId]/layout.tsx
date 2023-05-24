export default function NewCharacterLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div style={{ boxShadow: 'inset 0px 8px 6px 0px rgba(31,32,31,0.15)'}}>
          {children}
      </div>
    )
  }
  