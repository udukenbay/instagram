export default function MiniProfile() {
  return <div className="flex items-center justify-between mt-14 ml-10">
      <img className="h-16 rounded-full border p-[2px]" src="https://yt3.ggpht.com/ytc/AKedOLTu3R-kFSG843RnmFSq_Pt5vBhc6l4SSJWalkWKaA=s900-c-k-c0x00ffffff-no-rj" alt="" />
      <div className="flex-1 ml-4">
          <h2 className="font-bold">uad.uad</h2>
          <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
  </div>
}
