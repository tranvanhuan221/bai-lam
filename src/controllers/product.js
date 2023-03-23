import axios from "axios";
import dotenv from "dotenv";
import joi from "joi";
import Product from "../models/product";

dotenv.config();
const { API_URI } = process.env;

const productSchema = joi.object({
    name:joi.string().required(),
    price:joi.number().requires(),
    description:joi.string(),

});
export const getAll = async(req, res) => {
    try{
        const product = await Product.find();
        if(product.length ===0){
            return res.json({
                message:"khong co san pham nao ",
            });
        }
        return res.json(products);
    } catch(error){
        return res.status(400).json({
            message: error,
        });
    }
};
export const get = async function(req, res) {
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.json({
                message:"khong co san pham nao ",
            });
        }
        return res.json(products);
    } catch(error){
        return res.status(400).json({
            message: error,
        });
    }
};
export const create = async function(req, res) {
    try{
        const {error} = productSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message:error.details[0].message,
            });
        }
        const product = await Product.create(req.body);
        if(!product){
            return res.json({
                message:"khong them dc san pham",
            });
        }
        return res.json({
            message:"them san pham thanh cong",
            data:product,
        });
    
    }catch(error){
        return res.status(400).json({
            message:error,
        });
    }
};
export const update = async function (req, res){
    try{
        const {data: product } = await axios.patch(
            `${API_URI}/products/${req.params.id}`,
            req.body
        );
        if(!product){
            return res.json({
                message:"cap nhat san pham khong thanh cong",
            });
        }
        return res.json({
            message:"cap nhat san pham thanh cong",
            data:product,
        });
    }catch(error){
        return res.status(400).json({
            message:error,
        });
    }
};
export const remove = async function (req, res){
    try{
        await asios.delete(`${API_URI}/products/${req.params.id}`);
        res.json({
            message:"Xóa sản phẩm thành công",
        });
    }catch (error){
        return res.status(400).json({
            message: error,
        });
    }
};