//////////////////////////////////////////////////////////////////////
// Author      : R U Bharti
// Date        : 20th Nov., 2022  06:15 PM
// Project     : JUIDCO
// Component   : ClusterFormApi
// Description : Cluster api list
//////////////////////////////////////////////////////////////////////

const ClusterFormApi = () => {

    const baseUrl = 'http://203.129.217.245:80/api/cluster'

    // const token = '1756|TboTCPMMkGagRka00NStFFK0xsFOqhXkd7lAAYfc'

    let apiList = {
        
        // Getting all cluster
        getCluster : `${baseUrl}/get-all-clusters`,

        // Adding cluster
        addCluster : `${baseUrl}/save-cluster-details`,

        // Viewing Cluster
        viewCluster : `${baseUrl}/get-cluster-by-id/`,

        // Updating Cluster 
        updateCluster : `${baseUrl}/edit-cluster-details/`,

        // Delete Cluster
        deleteCluster : `${baseUrl}/delete-cluster-data/`

    }

    return apiList;

}

export default ClusterFormApi