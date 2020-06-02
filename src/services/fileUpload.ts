
import * as multer from "multer";
import * as path from "path";
import { v4 as uuidv4 } from 'uuid';

let _maxSize = 0;

const storage = multer.diskStorage({
    destination(req: any, _file, cb) {
        _maxSize = req.body.filesize && Number(req.body.filesize) ? req.body.filesize : 0;
        const fileLoc = req.body.filelocation ? req.body.filelocation : 'files';
        cb(null, path.join(__dirname, `../assets/${fileLoc}/`));
    },
    filename(_req, file, cb) {
        const fileArr = file.originalname.split('.');
        const newName = `${uuidv4()}.${fileArr[fileArr.length - 1]}`;
        cb(null, newName);
    }
});

const maxSize = (_maxfileSize: number) => !_maxfileSize || _maxfileSize === 0 ? 10 * 1000 * 1000 : _maxfileSize * 1000 * 1000; // 10MB

const upload = multer({
    storage,
    limits: { fileSize: maxSize(_maxSize) }
});

const _singleUpload = upload.single('file');
const _multiUpload = upload.array('files', 50);

export const singleUploadService = (req: any, res: any) => {
    return new Promise((resolve, reject) => {
        _singleUpload(req, res, (err) => {
            if (err) {
                // An unknown error occurred when uploading.
                return reject({ success: false, result: err });
            }

            return resolve({ success: true, resp: req.file });
        });

    });
};

export const multiUploadService = (req: any, res: any) => {
    return new Promise((resolve, reject) => {
        _multiUpload(req, res, (err) => {
            if (err) {
                return reject({ success: false, resp: err });
            }

            return resolve({ success: true, resp: req.files });
        });
    });
};