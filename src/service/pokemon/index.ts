
import { IPokemonProps, IDataRequestPokemon, IPokemonDetail, IPokemonType, IPokemonSelectType } from '@/service/pokemon/types'
import constants from '@/constant/index'

export const servicePokemonGetData = async (data: IDataRequestPokemon,signal?: AbortSignal): Promise<IPokemonProps> => {
  const response = await fetch(constants.API_ENDPOINT + `/pokemon?limit=${data.limit}&offset=${data.offset}`,
    {
      method: 'GET', signal
    }
  ).then(async (res) => {
    return await res.json();
  }).catch(() => {
    return false
  })

  return response;
}

export const servicePokemonSearch = async (search: string,signal?: AbortSignal): Promise<IPokemonDetail> => {
  const response = await fetch(constants.API_ENDPOINT + `/pokemon/` + search,
    {
      method: 'GET', signal
    }
  ).then(async (res) => {
    return await res.json();
  }).catch(() => {
    return false
  })

  return response;
}

export const servicePokemonGetDetail = async (url: string,signal?: AbortSignal): Promise<IPokemonDetail> => {
  const response = await fetch(url,
    {
      method: 'GET', signal
    }
  ).then(async (res) => {
    return await res.json();
  }).catch(() => {
    return false
  })

  return response;
}

export const servicePokemonGetType = async (signal?: AbortSignal): Promise<IPokemonType> => {
  const response = await fetch(constants.API_ENDPOINT + `/type`,
    {
      method: 'GET', signal
    }
  ).then(async (res) => {
    return await res.json();
  }).catch(() => {
    return false
  })

  return response;
}

export const servicePokemonSelectType = async (url: string,signal?: AbortSignal): Promise<IPokemonSelectType> => {
  const response = await fetch(url,
    {
      method: 'GET', signal
    }
  ).then(async (res) => {
    return await res.json();
  }).catch(() => {
    return false
  })

  return response;
}