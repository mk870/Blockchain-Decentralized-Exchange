
const main = async () => {
  const Mkhuetoken = await hre.ethers.getContractFactory("Mkhuetoken");
  const mkhuetoken = await Mkhuetoken.deploy(100000);

  await mkhuetoken.deployed();

  console.log("Mkhuetoken deployed to:", mkhuetoken.address);

  const Etherexchange = await hre.ethers.getContractFactory("Etherexchange");
  const etherexchange = await Etherexchange.deploy(mkhuetoken.address);

  await etherexchange.deployed();

  console.log("Etherexchange deployed to:", etherexchange.address);

  const balance2 = await mkhuetoken.balanceOf(mkhuetoken.address)
  console.log('Mkhuetoken balance before' ,balance2.toString())

  await mkhuetoken.transfer(etherexchange.address,'100000000000000000000000')
  const balance = await mkhuetoken.balanceOf(etherexchange.address)
  const balance3 = await mkhuetoken.balanceOf(mkhuetoken.address)
  console.log('Etherexchange balance' ,balance.toString())
  console.log('Mkhuetoken balance after' ,balance3.toString())

}


const runMain = async () =>{
  try{
    await main()
    process.exit(0)
  }catch(error){
    console.error(error)
    process.exit(1)
  }
}
runMain()