import { RequestHandler } from "express";
import Video from "../models/Video";
import { dbConnection } from "../database";

export const getVideos: RequestHandler = async (req, res) => {
  try {
    dbConnection();
    const getAllVideos = await Video.find();

    res.status(200).json({
      success: true,
      message: getAllVideos,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAVideo: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    dbConnection();
    const foundVideo = await Video.findById(id);

    if (!foundVideo) {
      return res.status(204).json({
        success: false,
        message: "video not found",
      });
    }

    res.status(200).json({
      success: true,
      data: foundVideo,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createVideo: RequestHandler = async (req, res) => {
  try {
    dbConnection();
    const videoFound = await Video.findOne({ url: req.body.url });

    if (videoFound) {
      return res.status(301).json({
        success: false,
        message: "The url already exist",
      });
    }

    const video = new Video(req.body);
    const savedVideo = await video.save();

    res.status(200).json({
      success: true,
      data: savedVideo,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateVideo: RequestHandler = async (req, res) => {
  try {
    dbConnection();
    const videoUpdated = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!videoUpdated) {
      return res.status(204).json({
        success: false,
        message: "video not updated",
      });
    }

    res.status(200).json({
      success: true,
      data: videoUpdated,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteVideo: RequestHandler = async (req, res) => {
  try {
    dbConnection();
    const videoDeleted = await Video.findByIdAndDelete(req.params.id);

    if (!videoDeleted) {
      return res.status(204).json({
        success: false,
        message: "video not deleted",
      });
    }

    res.status(200).json({
      success: true,
      data: videoDeleted,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
