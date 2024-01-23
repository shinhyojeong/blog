export type TagProps = {
  children: string
}

export const Tag = ({ children }: TagProps) => (
  <p className="inline-block rounded-full bg-gray-800 p-2 px-3 text-white">
    {children}
  </p>
)
