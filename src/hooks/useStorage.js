import AsyncStorage from "@react-native-async-storage/async-storage";

//hook de salvar senhas

const useStorage = () => {
    //buscas os itens salvos
    const getItem = async (key) => {
        try {
            const password = await AsyncStorage.getItem(key);
            return JSON.parse(password) || [];
        } catch (error) {
            console.log("Erro ao buscar", error)
            return [];
        }

    }

    //salvar um item no storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key);
            passwords.push(value)
            await AsyncStorage.setItem(key, JSON.stringify(passwords))

        } catch (error) {
            console.log("Erro ao salvar", error)
        }
    }



    //remover item do storage
    const removeItem = async (key, item) => {


        try {
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((password) => {
                return (password !== item)
            })
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))

            return myPasswords;

        } catch (error) {
            console.log("Erro ao deletar", error)

        }
    }

    return {
        getItem,
        saveItem,
        removeItem,
    }

}

export default useStorage;