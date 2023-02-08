import { Request, Response } from "express";
import { HttpResponse } from "../classes/HttpResponse";
import { HttpStatuses } from "../interfaces/IHttpStatuses";
import { AuthService } from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = {
      username: body.username,
      password: body.password,
    };
    AuthService.register(data, (result: any) => {
      new HttpResponse(
        res,
        result ? "User registered successfully." : "Error while register user.",
        result,
        result ? HttpStatuses.CREATE : HttpStatuses.BAD_REQUEST
      ).sendResponse();
    });
  } catch (error) {
    new HttpResponse(res).sendErrorResponse(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = {
        username: body.username,
        password: body.password,
      };
    AuthService.login(data,(result: any) => {
      new HttpResponse(
        res,
        result ? "Welcome to XcelTec." : "Wrong username or password.",
        result,
        result ? HttpStatuses.OK : HttpStatuses.BAD_REQUEST
      ).sendResponse();
    });
  } catch (error) {
    new HttpResponse(res).sendErrorResponse(error);
  }
};

export const postSong = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = {
      songName: body.songName,
      };
    AuthService.postSong(data,(result: any) => {
      new HttpResponse(
        res,
        result ? "Song posted successfully." : "Error while posting song.",
        result,
        result ? HttpStatuses.OK : HttpStatuses.BAD_REQUEST
      ).sendResponse();
    });
  } catch (error) {
    new HttpResponse(res).sendErrorResponse(error);
  }
};

export const updateSong = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = {
        songName: body.songName,
      };
    AuthService.updateSong(req.params.id,data,(result: any) => {
      new HttpResponse(
        res,
        result ? "Song updated successfully." : "Error while updating song.",
        result,
        result ? HttpStatuses.OK : HttpStatuses.BAD_REQUEST
      ).sendResponse();
    });
  } catch (error) {
    new HttpResponse(res).sendErrorResponse(error);
  }
};

export const getSong = async (req: Request, res: Response) => {
  try {
    
    AuthService.getSong((result: any) => {
      new HttpResponse(
        res,
        result ? "Song list fetched successfully." : "Error while fetching song.",
        result,
        result ? HttpStatuses.OK : HttpStatuses.BAD_REQUEST
      ).sendResponse();
    });
  } catch (error) {
    new HttpResponse(res).sendErrorResponse(error);
  }
};

export const deleteSong = async (req: Request, res: Response) => {
  try {
    
    AuthService.deleteSong(req.params.id,(result: any) => {
      new HttpResponse(
        res,
        result ? "Song deleted successfully." : "Error while deleting song.",
        result,
        result ? HttpStatuses.OK : HttpStatuses.BAD_REQUEST
      ).sendResponse();
    });
  } catch (error) {
    new HttpResponse(res).sendErrorResponse(error);
  }
};
