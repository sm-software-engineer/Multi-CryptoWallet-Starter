using System;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

// using Nethereum;
using Nethereum.Web3;
using Nethereum.Web3.Accounts;
using Nethereum.Web3.Accounts.Managed;
using Nethereum.Hex.HexConvertors;
using Nethereum.Hex.HexTypes;
using Nethereum.ABI.FunctionEncoding.Attributes;
using Nethereum.Contracts.CQS;
using Nethereum.Util;
using Nethereum.Hex.HexConvertors.Extensions;
using Nethereum.Contracts;
using Nethereum.Contracts.Extensions;
using NBitcoin;
using Nethereum.HdWallet;

namespace netcore_backend
{
    class Program
    {
        // User Password from login form
        static string UserPassword = "SamplePassword123!@#";//string.Empty;

        // mnemonic phrase
        static string SeedPhrase = string.Empty;


        static void Main(string[] args)
        {
            // set user's phrase
            SeedPhrase = GenerateSeedPhrase();           
            Console.WriteLine(SeedPhrase);

            // CreateEtherWallet();
            // This is cli Etherwallet address and private key using user password and seed phrase
            CreateEtherWallet();

            // this is bitcoin cli wallet.
            CreateBitcoinWallet();


        }

        
        //As you know, we can use the same address and private key on all the tokens based on ethereum, binance
        //therefore this function is not only for ehter wallet
        /////**********All EVM token use same private key and address.*********************
        static void CreateEtherWallet(){            
            /* //Very Simple wallet
            Console.WriteLine("Pal cryptocurrency wallet backend!");
            var web3 = new Nethereum.Geth.Web3Geth();
            var ecKey = Nethereum.Signer.EthECKey.GenerateKey();

            // generate private key 
            var privateKey = ByteArrayToString(ecKey.GetPrivateKeyAsBytes());//.ToHex();            
            Console.WriteLine("*****Pall wallet Private Key here");
            Console.WriteLine(privateKey);

            // generate wallet adddress
            Console.WriteLine("*****Pall wallet Address here");
            var account = new Account(privateKey);
            Console.WriteLine(account.Address); 
            */

            //create using seedPhrase and UserPassword(from client)
            var wallet = new Wallet(SeedPhrase, UserPassword);
            var newAccount = wallet.GetAccount(0);
            string privateKeyString = newAccount.PrivateKey.Substring(2);
            
            Console.WriteLine("*****Pall wallet Private Key here");
            Console.WriteLine(privateKeyString);
            Console.WriteLine("*****Pall wallet Address here");
            Console.WriteLine(newAccount.Address);
        }

    
        static void CreateBitcoinWallet(){
            Key key = new Key(); //generates a new private key.
            PubKey pubKey = key.PubKey; //gets the matching public key.
            Console.WriteLine("Public Key: {0}", pubKey);
            KeyId hash = pubKey.Hash; //gets a hash of the public key.
            Console.WriteLine("Hashed public key: {0}", hash);
            BitcoinPubKeyAddress address = pubKey.GetAddress(Network.Main); //retrieves thebitcoin address.
            Console.WriteLine("Address: {0}", address);
            Script scriptPubKeyFromAddress = address.ScriptPubKey;
            Console.WriteLine("ScriptPubKey from address: {0}", scriptPubKeyFromAddress);
            Script scriptPubKeyFromHash = hash.ScriptPubKey;
            Console.WriteLine("ScriptPubKey from hash: {0}", scriptPubKeyFromHash);
            BitcoinSecret secret = key.GetBitcoinSecret(Network.Main);
            Console.WriteLine("Bitcoin Secret: {0}", secret);
        }

        public static string GenerateSeedPhrase()
        {
            var mnemonic = new Mnemonic(Wordlist.English, WordCount.Twelve);
            return mnemonic.IsValidChecksum ? mnemonic.ToString() : string.Empty;
        }

        public static string ByteArrayToString(byte[] ba)
        {
            StringBuilder hex = new StringBuilder(ba.Length * 2);
            foreach (byte b in ba)
                hex.AppendFormat("{0:x2}", b);
            return hex.ToString();
        }
    }
}
