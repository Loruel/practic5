export default function Testimonies({ data: { photo, text, nombre, puesto } }) {
  return (
    <div className="flex items-center flex-col w-80">
      <figure className=" mt-20">
        <img className="rounded-full w-20" src={photo} alt="" />
      </figure>
      <div className="flex items-center flex-col p-7">
        <p className="mt-10">{text}</p>
        <p className="font-bold mt-10">{nombre}</p>
        <p className="text-sm text-[#c8c6c7] mt-2">{puesto}</p>
      </div>
    </div>
  )
}
