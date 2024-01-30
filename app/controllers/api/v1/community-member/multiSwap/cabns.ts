let asyncMiddleware = require("../../../../../lib/response/asyncMiddleware");
let stringHelper = require("../../../../../helpers/stringHelper");
import {
  doValidationForCreateUserCabn,
  createUserCabn,
  deleteUserIdFromCabn,
  deleteUserIdFromAllCabns,
} from "../../../../../helpers/multiSwapHelpers/cabnsHelper";

module.exports = function (router: any) {
  router.delete(
    "/all",
    asyncMiddleware(async (req: any, res: any) => {
      await deleteUserIdFromAllCabns(req.user);
      return res.http200({
        message: stringHelper.strSuccess,
      });
    })
  );

  router.delete(
    "/:cabnId",
    asyncMiddleware(async (req: any, res: any) => {
      await deleteUserIdFromCabn(req.user, req.params.cabnId);
      return res.http200({
        message: stringHelper.strSuccess,
      });
    })
  );
};