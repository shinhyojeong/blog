export type TagProps = {
  children: string
}

export const Tag = ({ children }: TagProps) => (
  <p className="inline-block rounded-full bg-gray-800 px-2.5 py-1.5 text-sm text-white">
    {children}
  </p>
)
