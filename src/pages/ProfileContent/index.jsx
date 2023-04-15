import GlassMorphismCard from "../../components/GlassMorphismCard";
import {useActiveListings, useAddress, useContract} from "@thirdweb-dev/react";
import {CONTRACT_ADDRESS} from "../../constants";
import { useQuery, gql } from "@apollo/client";
import {useEffect, useState} from "react";
import {client} from "../../services/apollo";
import { useOwnedNFTs } from "@thirdweb-dev/react";

export const ProfileContent = () => {
  const address = useAddress()
  const { contract } = useContract('0x87bC3D2EcC25a88f2D324398bF0E9d4e22b07e89')
  const [tokenBalances, setTokenBalances] = useState([]);
  const { data: nftData, isLoading, error } = useOwnedNFTs(contract, address);
  const testQuery = gql`
    query MyQuery {
      Wallet(
        input: {identity: "0xB95E03e3B2F3eDc7768352d2fF7895E1275fC66b", blockchain: polygon}
      ) {
        blockchain
        identity
        tokenBalances {
          tokenNfts {
            contentType
            rawMetaData
            contentValue {
              image {
                original
              }
            }
            metaData {
              description
              name
            }
          }
        }
      }
    }
`
  // console.log(nftData)
  // const { contract } = useContract(CONTRACT_ADDRESS, 'marketplace')
  const { data, loading } = useQuery(testQuery, {
    variables: {
      owner: ''
    }
  });
  useEffect(() => {
    if(data) {
      const balances = data['Wallet']['tokenBalances'];
      balances && setTokenBalances(balances)
    }
  }, [data])
  return (
    <>
      {!loading && tokenBalances.filter(item => item['tokenNfts']['contentValue']['image']).map(item => {
        console.log(item)
        const imgSrc = item['tokenNfts']['contentValue']['image']['original'];
        const repoMetaData = item['tokenNfts']['rawMetaData']['attributes'].filter(item => item['trait_type'] === 'repoUrl')[0]
        const repoUrl = repoMetaData?.value;
        const nftDescription = item['tokenNfts']['metaData']['description'];
        console.log(nftDescription)

        return <GlassMorphismCard repoUrl={repoUrl ?? 'https://github.com'} imgSrc={imgSrc} description={nftDescription ?? ""} />
      })}
    </>

  )
}